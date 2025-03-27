"use client";
import React, { useState } from "react";
import styled from "styled-components";

function ShippingForm() {
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");

  return (
    <ShippingDetails>
      <SectionTitle>Shipping information</SectionTitle>
      <DeliveryOptions>
        <DeliveryOption
          active={deliveryMethod === "delivery"}
          onClick={() => setDeliveryMethod("delivery")}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="5993:8886" width="128" height="20" viewBox="0 0 128 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="delivery-icon"> <mask id="path-1-outside-1_5993_8886" maskUnits="userSpaceOnUse" x="0" y="1" width="18" height="18" fill="black"> <rect fill="white" y="1" width="18" height="18"></rect> <path d="M17 10C17 14.4183 13.4183 18 9 18C4.58172 18 1 14.4183 1 10C1 5.58172 4.58172 2 9 2C13.4183 2 17 5.58172 17 10ZM5.41554 10C5.41554 11.9796 7.02036 13.5845 9 13.5845C10.9796 13.5845 12.5845 11.9796 12.5845 10C12.5845 8.02036 10.9796 6.41554 9 6.41554C7.02036 6.41554 5.41554 8.02036 5.41554 10Z"></path> </mask> <path d="M17 10C17 14.4183 13.4183 18 9 18C4.58172 18 1 14.4183 1 10C1 5.58172 4.58172 2 9 2C13.4183 2 17 5.58172 17 10ZM5.41554 10C5.41554 11.9796 7.02036 13.5845 9 13.5845C10.9796 13.5845 12.5845 11.9796 12.5845 10C12.5845 8.02036 10.9796 6.41554 9 6.41554C7.02036 6.41554 5.41554 8.02036 5.41554 10Z" fill="#146EB4"></path> <path d="M17 10C17 14.4183 13.4183 18 9 18C4.58172 18 1 14.4183 1 10C1 5.58172 4.58172 2 9 2C13.4183 2 17 5.58172 17 10ZM5.41554 10C5.41554 11.9796 7.02036 13.5845 9 13.5845C10.9796 13.5845 12.5845 11.9796 12.5845 10C12.5845 8.02036 10.9796 6.41554 9 6.41554C7.02036 6.41554 5.41554 8.02036 5.41554 10Z" stroke="#146EB4" stroke-opacity="0.5" stroke-width="2" mask="url(#path-1-outside-1_5993_8886)"></path> <path d="M34.6211 8.62851H44.348V10.2612H34.6211V8.62851ZM33 4.54688H41.1057V6.17953H33V4.54688Z" fill="#146EB4"></path> <path d="M56.9268 9.64089L54.2049 3.27786C54.1349 3.11439 54.0187 2.97506 53.8704 2.87714C53.7222 2.77923 53.5486 2.72703 53.3711 2.72701H50.6492V0.909003C50.6492 0.66792 50.5536 0.436712 50.3834 0.266241C50.2133 0.0957699 49.9825 0 49.7419 0H35.2251V1.81801H48.8346V13.2314C48.4214 13.4723 48.0598 13.7925 47.7705 14.1738C47.4812 14.555 47.2699 14.9898 47.1488 15.4531H41.4474C41.2265 14.5962 40.7013 13.8494 39.9703 13.3527C39.2392 12.856 38.3524 12.6435 37.4761 12.755C36.5998 12.8665 35.7942 13.2944 35.2103 13.9584C34.6264 14.6225 34.3042 15.4771 34.3042 16.3621C34.3042 17.247 34.6264 18.1016 35.2103 18.7657C35.7942 19.4297 36.5998 19.8576 37.4761 19.9691C38.3524 20.0806 39.2392 19.8681 39.9703 19.3714C40.7013 18.8747 41.2265 18.1279 41.4474 17.2711H47.1488C47.3462 18.0512 47.7976 18.7431 48.4315 19.2374C49.0655 19.7316 49.8459 20 50.6492 20C51.4525 20 52.2329 19.7316 52.8668 19.2374C53.5008 18.7431 53.9522 18.0512 54.1495 17.2711H56.093C56.3336 17.2711 56.5644 17.1753 56.7345 17.0048C56.9047 16.8343 57.0003 16.6031 57.0003 16.3621V9.99903C57.0002 9.8759 56.9752 9.75405 56.9268 9.64089ZM37.947 18.1801C37.5881 18.1801 37.2373 18.0734 36.9389 17.8737C36.6404 17.6739 36.4079 17.39 36.2705 17.0578C36.1332 16.7256 36.0972 16.36 36.1673 16.0074C36.2373 15.6547 36.4101 15.3308 36.6639 15.0765C36.9177 14.8223 37.241 14.6491 37.593 14.579C37.945 14.5088 38.3098 14.5448 38.6414 14.6824C38.973 14.82 39.2564 15.0531 39.4558 15.352C39.6552 15.651 39.7616 16.0025 39.7616 16.3621C39.7616 16.8442 39.5704 17.3066 39.2301 17.6476C38.8898 17.9885 38.4283 18.1801 37.947 18.1801ZM50.6492 4.54502H52.7723L54.7175 9.09003H50.6492V4.54502ZM50.6492 18.1801C50.2903 18.1801 49.9395 18.0734 49.641 17.8737C49.3426 17.6739 49.1101 17.39 48.9727 17.0578C48.8354 16.7256 48.7994 16.36 48.8695 16.0074C48.9395 15.6547 49.1123 15.3308 49.3661 15.0765C49.6198 14.8223 49.9432 14.6491 50.2952 14.579C50.6472 14.5088 51.012 14.5448 51.3436 14.6824C51.6752 14.82 51.9586 15.0531 52.158 15.352C52.3574 15.651 52.4638 16.0025 52.4638 16.3621C52.4638 16.8442 52.2726 17.3066 51.9323 17.6476C51.592 17.9885 51.1304 18.1801 50.6492 18.1801ZM55.1857 15.4531H54.1495C53.9497 14.6744 53.4976 13.9843 52.8641 13.4907C52.2306 12.9972 51.4516 12.7283 50.6492 12.726V10.908H55.1857V15.4531Z" fill="#146EB4"></path> <text fill="#146EB4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="65.0005" y="15.8182">Delivery</tspan></text> </svg>',
            }}
          />
        </DeliveryOption>
        <DeliveryOption
          active={deliveryMethod === "pickup"}
          onClick={() => setDeliveryMethod("pickup")}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="5993:8888" width="114" height="22" viewBox="0 0 114 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="pickup-icon"> <circle cx="8" cy="11" r="7.5" stroke="#545454"></circle> <path d="M41 21L49.131 16.3242C49.447 16.142 49.605 16.052 49.72 15.9175C49.8219 15.7995 49.899 15.658 49.946 15.503C50 15.3264 50 15.1297 50 14.7341V6.03585M41 21L32.869 16.3242C32.553 16.142 32.395 16.052 32.28 15.9175C32.1781 15.7995 32.101 15.658 32.054 15.503C32 15.3264 32 15.1286 32 14.7319V6.03585M41 21V10.9295M50 6.03585L41 10.9295M50 6.03585L45.5 3.44682M32 6.03585L40.269 1.28115C40.537 1.12781 40.67 1.05003 40.811 1.02003C40.9359 0.993324 41.0641 0.993324 41.189 1.02003C41.329 1.05003 41.463 1.12781 41.73 1.28115L45.5 3.44682M32 6.03585L36.5 8.48376M41 10.9295L36.5 8.48265M45.5 3.44682L36.5 8.48265M36.5 8.48265V10.9295" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" font-weight="500" letter-spacing="0em"><tspan x="58" y="16.8182">Pick up</tspan></text> </svg>',
            }}
          />
        </DeliveryOption>
      </DeliveryOptions>

      <FormGroup>
        <Label htmlFor="fullName">Full name</Label>
        <Input type="text" id="fullName" value="Oghenevwegba Eminokanju" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email address</Label>
        <Input type="email" id="email" value="vwegbaeminokanju@gmail.com" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Phone number</Label>
        <PhoneInput>
          <PhoneCode>+234</PhoneCode>
          <PhoneDivider />
          <PhoneNumber>9024076853</PhoneNumber>
        </PhoneInput>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="country">Country</Label>
        <SelectWrapper>
          <span>Choose country</span>
          <i className="ti ti-chevron-down" />
        </SelectWrapper>
      </FormGroup>

      <AddressGrid>
        <FormGroup>
          <Label htmlFor="state">State</Label>
          <Input type="text" id="state" value="Delta" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" value="Warri" />
        </FormGroup>
        <FormGroup id="zip">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input type="text" id="zipCode" value="330201" />
        </FormGroup>
      </AddressGrid>

      <FormGroup>
        <Label htmlFor="address">Address</Label>
        <Input
          type="text"
          id="address"
          value="Off enakeyhare street off bendel estate"
        />
      </FormGroup>
    </ShippingDetails>
  );
}

const ShippingDetails = styled.section`
  width: 540px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 480px){
    padding: 0%;
  }
`;

const SectionTitle = styled.h2`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const DeliveryOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  @media (max-width: 480px){
    display: none;
  }
`;

const DeliveryOption = styled.button`
  flex: 1;
  padding: 14px 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "rgba(20, 110, 180, 0.05)" : "transparent"};
  border-color: ${(props) => (props.active ? "#146EB4" : "rgba(0, 0, 0, 0.1)")};
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(20, 110, 180, 0.05);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  @media (max-width: 480px){
    margin-bottom: 5px;
  }
`;

const Label = styled.label`
  display: block;
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: Inter, sans-serif;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 14px;
    height: 44px;
    padding: 0 10px;
  }
`;

const PhoneInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const PhoneCode = styled.span`
  font-family: Inter, sans-serif;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const PhoneDivider = styled.div`
  width: 1px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const PhoneNumber = styled.span`
  font-family: Inter, sans-serif;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const SelectWrapper = styled.div`
  height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
  }
  #zip{
    grid-column: span 2;
  }
  @media (max-width: 480px){
    margin-bottom: 5px;
  }
`;

export default ShippingForm;
