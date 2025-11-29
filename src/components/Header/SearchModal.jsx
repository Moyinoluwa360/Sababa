// ...existing code...
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {Loading} from "../Loading";
import ErrorPopup from "../ErrorPopup";
import useWindowWidth from "../useWindowWidth";
import { useDebounce } from "../../hooks/useDebounce";

export const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedTerm = useDebounce(searchTerm, 300);
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  // Support common shapes of your outfits slice
  const outfitsState = useSelector((state) => state.outfits ?? {});
  const outfitsList =
    outfitsState.items ?? outfitsState.outfits ?? outfitsState.list ?? outfitsState ?? [];
  const loading = outfitsState.loading ?? outfitsState.isLoading ?? false;
  const error = outfitsState.error ?? null;

  useEffect(() => {
    if (!debouncedTerm) {
      setSearchResults([]);
      return;
    }

    const term = debouncedTerm.toLowerCase();

    const results = (Array.isArray(outfitsList) ? outfitsList : []).reduce((acc, outfit) => {
      const pieces = Array.isArray(outfit.pieces) ? outfit.pieces : [];
      const matchingPieces = pieces.filter((piece) =>
        String(piece.description || "").toLowerCase().includes(term)
      );

      if (matchingPieces.length > 0) {
        acc.push({
          outfitId: outfit.id ?? outfit._id ?? outfit.uid ?? "",
          outfitImage: outfit.image ?? outfit.outfitImage ?? outfit.mainImage ?? "",
          gender: outfit.gender ?? "all",
          matchingPieces,
        });
      }
      return acc;
    }, []);

    setSearchResults(results);
  }, [debouncedTerm, outfitsList]);

  const handlePieceClick = (outfitId, gender) => {
    onClose();
    // navigate to your outfit details route: /alloutfits/:gender/:id
    navigate(`/home/alloutfits/${gender || "all"}/${outfitId}`);
  };

  if (!isOpen) return null;

  return (
    <SearchOverlay onClick={onClose}>
      <SearchContainer onClick={(e) => e.stopPropagation()} $nw={windowWidth < 768}>
        <SearchHeader>
          <SearchInput
            type="text"
            placeholder="Search piece descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            aria-label="Search pieces"
          />
          <CloseButton onClick={onClose} aria-label="Close search">
            &times;
          </CloseButton>
        </SearchHeader>

        <ResultsContainer>
          {loading && <Loading />}
          {error && <ErrorPopup message={String(error)} onClose={() => {}} />}

          {!loading && !error && (
            <>
              {searchResults.map((result) => (
                <ResultItem
                  key={result.outfitId || Math.random()}
                  onClick={() => handlePieceClick(result.outfitId, result.gender)}
                >
                  <OutfitImage
                    src={result.outfitImage || "/placeholder-image.svg"}
                    alt="outfit"
                    onError={(e) => (e.target.src = "/placeholder-image.svg")}
                  />
                  <PiecesList>
                    {result.matchingPieces.map((piece, idx) => (
                      <PieceItem key={`${result.outfitId}-p-${idx}`}>
                        {piece.description}
                      </PieceItem>
                    ))}
                  </PiecesList>
                </ResultItem>
              ))}

              {debouncedTerm && searchResults.length === 0 && <NoResults>No pieces found</NoResults>}
            </>
          )}
        </ResultsContainer>
      </SearchContainer>
    </SearchOverlay>
  );
};

export default SearchModal;

// Styled components
const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(4px);
  z-index: 10000001;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
`;

const SearchContainer = styled.div`
  width: 92%;
  max-width: ${(p) => (p.$nw ? "680px" : "640px")};
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

const SearchHeader = styled.div`
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 44px 12px 12px;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.15s;
  &:focus {
    border-color: #111;
  }
  &::placeholder {
    color: #9b9b9b;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 18px;
  background: none;
  border: none;
  font-size: 22px;
  color: #6b6b6b;
  cursor: pointer;
  padding: 6px;
  &:hover {
    color: #111;
  }
`;

const ResultsContainer = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: 14px;
`;

const ResultItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  margin-bottom: 12px;
  cursor: pointer;
  align-items: center;
  transition: transform 0.14s, box-shadow 0.14s, border-color 0.14s;
  &:hover {
    transform: translateY(-3px);
    border-color: #d1d1d1;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
`;

const OutfitImage = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
  border-radius: 8px;
  background: #f7f7f7;
`;

const PiecesList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PieceItem = styled.div`
  font-size: 14px;
  color: #222;
  margin-bottom: 6px;
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding-right: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Optional: If you want multiline ellipsis (shows 2 lines), use this style instead:
const PieceItemMultiline = styled.div`
  font-size: 14px;
  color: #222;
  margin-bottom: 6px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 28px 12px;
  color: #666;
  font-size: 14px;
`;