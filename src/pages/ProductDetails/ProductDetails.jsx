import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Heart, Share2, ChevronDown, Package, Calendar } from "lucide-react";
import ColorSelector from "../../components/ColorSelector";
import { addToCart } from "../../redux/slices/cartSlice";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";
import { fetchProductDetails } from "../../redux/slices/productSlice";

const ProductContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 32px 16px;

  @media (min-width: 768px) {
    padding: 32px 40px;
  }
`;

const PriceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AmazonPrice = styled.span`
  color: #1c1c1c;
  font-size: 16px;
  font-weight: 700;
  padding: 8px;
`;

const BuyDirectLink = styled.a`
  color: #1c1c1c;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 1280px) {
    grid-template-columns: auto 1fr auto;
    gap: 32px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  order: 2;

  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 24px;
    overflow: visible;
    order: 1;
  }
`;

const ThumbnailButton = styled.button`
  width: 69px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainImageContainer = styled.div`
  position: relative;
  order: 1;

  @media (min-width: 1280px) {
    order: 2;
  }
`;

const MainImageWrapper = styled.div`
  width: 100%;
  max-width: 513px;
  margin: 0 auto;
  height: 400px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    height: 716px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.transparent ? "rgba(255, 255, 255, 0.5)" : "white"};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  order: 3;
`;

const ProductTitle = styled.h1`
  color: #1c1c1c;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PriceLabel = styled.span`
  color: #545454;
  font-size: 12px;
  font-weight: 500;
`;

const Price = styled.div`
  color: #1c1c1c;
  font-size: 20px;
  font-weight: 700;
`;

const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColorLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ColorText = styled.span`
  color: ${(props) => (props.muted ? "#545454" : "#1c1c1c")};
  font-size: 14px;
  font-weight: 500;
`;

const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectLabel = styled.span`
  color: #545454;
  font-size: 14px;
  font-weight: 500;
`;

const SizeGuideLink = styled.a`
  color: #1c1c1c;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  height: 44px;
  padding: 13.5px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(217, 217, 217, 0.1);
  color: #1c1c1c;
  font-size: 14px;
  font-weight: 500;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #1c1c1c;
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AddToBagButton = styled(Button)`
  background: #1c1c1c;
  color: white;
`;

const BuyNowButton = styled(Button)`
  background: #4caf50;
  color: white;
`;

const InfoBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const InfoText = styled.div`
  color: #1c1c1c;
  font-size: 14px;
  font-weight: 500;
`;

const InfoTextBold = styled.span`
  font-weight: 700;
`;

const InfoLink = styled.a`
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: 18px;
  color: #545454;
`;

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  const { selectedProduct, productDetailsLoading, productDetailsError } = useSelector((state) => state.products);
  const { items: wishlistItems } = useSelector((state) => state.wishlist);

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState("");

  // Fetch product details when component mounts or productId changes
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [productId, dispatch]);

  // Use real product data or fallback to loading state
  const product = selectedProduct || null;
  const isInWishlist = product ? wishlistItems.some(item => item.id === product.id) : false;

  const handleAddToCart = () => {
    if (!product) {
      setError("Product not available");
      return;
    }

    if (!selectedSize) {
      setError("Please select a size");
      return;
    }

    if (!quantity || quantity < 1) {
      setError("Please select a valid quantity");
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.title,
      originalPrice: product.originalPrice,
      images: product.images,
      color: selectedColor,
      size: selectedSize,
      platform: product.platform,
      platformUrl: product.platformUrl
    };

    dispatch(addToCart({ product: cartItem, quantity: parseInt(quantity) }));
    setError("");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    if (!error) {
      navigate("/bag");
    }
  };

  const handleWishlistToggle = () => {
    if (!product) return;
    
    dispatch(toggleWishlist({
      id: product.id,
      title: product.title,
      originalPrice: product.originalPrice,
      images: product.images,
      platform: product.platform
    }));
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Show loading state
  if (productDetailsLoading) {
    return <LoadingSpinner>Loading product details...</LoadingSpinner>;
  }

  // Show error state
  if (productDetailsError) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Error Loading Product</h2>
        <p>{productDetailsError}</p>
        <button onClick={() => navigate('/home')}>Go Back Home</button>
      </div>
    );
  }

  // Show not found state
  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/home')}>Go Back Home</button>
      </div>
    );
  }

  // Get product images, fallback to empty array if none
  const productImages = product.images || [];
  const mainImage = productImages[currentImageIndex] || productImages[0] || '';

  return (
    <ProductContainer>
      <PriceHeader>
        <PriceTag>
          <AmazonPrice>{product.platform} ${product.originalPrice}</AmazonPrice>
        </PriceTag>
        <BuyDirectLink href={product.platformUrl} target="_blank" rel="noopener noreferrer">
          Buy direct from the site
        </BuyDirectLink>
      </PriceHeader>

      <ProductGrid>
        <ThumbnailContainer>
          {productImages.map((image, index) => (
            <ThumbnailButton 
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <ThumbnailImage
                src={image}
                alt={`Product thumbnail ${index + 1}`}
              />
            </ThumbnailButton>
          ))}
        </ThumbnailContainer>

        <MainImageContainer>
          <MainImageWrapper>
            <MainImage 
              src={mainImage} 
              alt={product.title} 
            />
            <ActionButtons>
              <ActionButton transparent onClick={handleWishlistToggle}>
                <Heart 
                  size={20} 
                  color="#1C1C1C" 
                  strokeWidth={1}
                  fill={isInWishlist ? "#1C1C1C" : "none"}
                />
              </ActionButton>
              <ActionButton>
                <Share2 size={16} color="#1C1C1C" />
              </ActionButton>
            </ActionButtons>
          </MainImageWrapper>
        </MainImageContainer>

        <ProductDetails>
          <ProductTitle>{product.title}</ProductTitle>

          <PriceSection>
            <PriceLabel>Price:</PriceLabel>
            <Price>${product.originalPrice}</Price>
          </PriceSection>

          <ColorSection>
            <ColorLabel>
              <ColorText muted>Color:</ColorText>
              <ColorText>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</ColorText>
            </ColorLabel>
            <ColorSelector
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />
          </ColorSection>

          <SelectSection>
            <SelectHeader>
              <SelectLabel>Size</SelectLabel>
              <SizeGuideLink href="#">Size guide</SizeGuideLink>
            </SelectHeader>
            <SelectWrapper>
              <Select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Please select</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </Select>
              <SelectIcon>
                <ChevronDown size={10} color="#1C1C1C" />
              </SelectIcon>
            </SelectWrapper>
          </SelectSection>

          <SelectSection>
            <SelectLabel>Quantity</SelectLabel>
            <SelectWrapper>
              <Select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </Select>
              <SelectIcon>
                <ChevronDown size={10} color="#1C1C1C" />
              </SelectIcon>
            </SelectWrapper>
          </SelectSection>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <ButtonSection>
            <AddToBagButton onClick={handleAddToCart}>
              Add to Bag
            </AddToBagButton>
            <BuyNowButton onClick={handleBuyNow}>
              Buy now
            </BuyNowButton>
          </ButtonSection>

          <InfoBox>
            <InfoItem>
              <Calendar size={16} color="#1C1C1C" strokeWidth={2} />
              <InfoText>
                Order today to get by <InfoTextBold>03-02-2025</InfoTextBold>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <Package size={16} color="#1C1C1C" strokeWidth={1.5} />
              <InfoText>
                Returns and exchanges accepted{" "}
                <InfoLink href="#">Learn more</InfoLink>
              </InfoText>
            </InfoItem>
          </InfoBox>
        </ProductDetails>
      </ProductGrid>
    </ProductContainer>
  );
} 