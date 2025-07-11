"use client";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useWindowWidth from "../../components/useWindowWidth";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

function NavigationItem({ icon, label, setCurrentNav, currentNav, onClick }) {
  return (
    <NavItemContainer
      onClick={() => {
        if (onClick) {
          onClick(); // Execute custom onClick if provided
        } else {
          setCurrentNav(label);
        }
      }}
      className={currentNav === label ? "active" : ""}
    >
      <IconWrapper>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </IconWrapper>
      <Label>{label}</Label>
    </NavItemContainer>
  );
}

export function NavigationItems(props) {
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate("/", { replace: true }); // Redirect to sign-in page after sign out
      // Optionally show a success message or handle additional cleanup
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navigationItems = [
    {
      icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M22.907 17.8183C22.907 18.5898 22.6006 19.3297 22.055 19.8753C21.5094 20.4209 20.7695 20.7274 19.998 20.7274C19.2264 20.7274 18.4865 20.4209 17.9409 19.8753C17.3954 19.3297 17.0889 18.5898 17.0889 17.8183C17.0889 17.0467 17.3954 16.3068 17.9409 15.7612C18.4865 15.2157 19.2264 14.9092 19.998 14.9092C20.7695 14.9092 21.5094 15.2157 22.055 15.7612C22.6006 16.3068 22.907 17.0467 22.907 17.8183ZM21.4525 17.8183C21.4525 18.204 21.2993 18.574 21.0265 18.8468C20.7537 19.1196 20.3837 19.2728 19.998 19.2728C19.6122 19.2728 19.2422 19.1196 18.9694 18.8468C18.6967 18.574 18.5434 18.204 18.5434 17.8183C18.5434 17.4325 18.6967 17.0625 18.9694 16.7898C19.2422 16.517 19.6122 16.3637 19.998 16.3637C20.3837 16.3637 20.7537 16.517 21.0265 16.7898C21.2993 17.0625 21.4525 17.4325 21.4525 17.8183Z" fill="#1C1C1C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C15.5818 12 12 15.5818 12 20C12 24.4182 15.5818 28 20 28C24.4182 28 28 24.4182 28 20C28 15.5818 24.4182 12 20 12ZM13.4545 20C13.4545 21.52 13.9731 22.9193 14.8422 24.0305C15.4527 23.2292 16.2401 22.5797 17.143 22.1329C18.0459 21.686 19.0399 21.4539 20.0473 21.4545C21.0417 21.4534 22.0233 21.6793 22.9172 22.1152C23.811 22.551 24.5936 23.1852 25.2051 23.9695C25.8352 23.143 26.2595 22.1783 26.4428 21.1553C26.6261 20.1323 26.5632 19.0804 26.2593 18.0865C25.9553 17.0927 25.4191 16.1855 24.6949 15.44C23.9707 14.6946 23.0795 14.1323 22.0948 13.7996C21.1102 13.467 20.0605 13.3737 19.0326 13.5273C18.0047 13.6809 17.0282 14.077 16.1838 14.6829C15.3395 15.2889 14.6515 16.0872 14.1769 17.0118C13.7023 17.9364 13.4547 18.9607 13.4545 20ZM20 26.5455C18.4974 26.5479 17.0401 26.031 15.8749 25.0822C16.3439 24.4106 16.9681 23.8623 17.6946 23.484C18.4211 23.1056 19.2282 22.9084 20.0473 22.9091C20.8561 22.9084 21.6535 23.1007 22.3731 23.47C23.0927 23.8394 23.7138 24.3751 24.1847 25.0327C23.0105 26.0124 21.5292 26.5478 20 26.5455Z" fill="#1C1C1C"></path></svg>',
      label: "Profile",
      path: "profile"
    },
    {
      icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M13.5678 26V15.9667L12 12.6611L13.4472 12L15.3367 15.9278H24.6633L26.5528 12L28 12.6611L26.4322 15.9667V26H13.5678ZM18.392 20.5556H21.608C21.8358 20.5556 22.0269 20.4809 22.1813 20.3316C22.3357 20.1822 22.4126 19.9976 22.4121 19.7778C22.4115 19.5579 22.3343 19.3733 22.1805 19.224C22.0267 19.0747 21.8358 19 21.608 19H18.392C18.1642 19 17.9733 19.0747 17.8195 19.224C17.6657 19.3733 17.5885 19.5579 17.5879 19.7778C17.5874 19.9976 17.6646 20.1825 17.8195 20.3323C17.9744 20.4822 18.1652 20.5566 18.392 20.5556ZM15.1759 24.4444H24.8241V17.4833H15.1759V24.4444Z" fill="#1C1C1C"></path></svg>',
      label: "Your orders",
      path: "your-order"
    },
    {
      icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M25.8462 13.5H14.1538C12.9643 13.5 12 14.5186 12 15.775V24.225C12 25.4814 12.9643 26.5 14.1538 26.5H25.8462C27.0357 26.5 28 25.4814 28 24.225V15.775C28 14.5186 27.0357 13.5 25.8462 13.5Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.3999H28M15.0769 21.7874H16.9231V22.5999H15.0769V21.7874Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linejoin="round"></path></svg>',
      label: "Payment method",
      path: "payment-method"
    },
    {
      icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M23.5543 11V12.8M25.2565 29C25.2565 27.5678 24.6946 26.1943 23.6944 25.1816C22.6942 24.1689 21.3377 23.6 19.9232 23.6C18.5087 23.6 17.1521 24.1689 16.1519 25.1816C15.1517 26.1943 14.5898 27.5678 14.5898 29M16.4432 11V12.8" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0009 23.5999C21.9645 23.5999 23.5564 21.9881 23.5564 19.9999C23.5564 18.0117 21.9645 16.3999 20.0009 16.3999C18.0372 16.3999 16.4453 18.0117 16.4453 19.9999C16.4453 21.9881 18.0372 23.5999 20.0009 23.5999Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.2222 12.7998H13.7778C12.7959 12.7998 12 13.6057 12 14.5998V27.1998C12 28.1939 12.7959 28.9998 13.7778 28.9998H26.2222C27.2041 28.9998 28 28.1939 28 27.1998V14.5998C28 13.6057 27.2041 12.7998 26.2222 12.7998Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      label: "Contact",
      path: "contact"
    },
    {
      icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M26.6823 17.552L26.3894 17.3897L26.299 17.3388C26.0808 17.2087 25.897 17.0287 25.7628 16.8138C25.7484 16.7923 25.7356 16.7692 25.71 16.7247C25.5374 16.4493 25.4537 16.1282 25.4699 15.8042L25.4747 15.4661C25.4843 14.9251 25.4891 14.653 25.4123 14.4096C25.3443 14.193 25.2305 13.9933 25.0786 13.824C24.9073 13.6331 24.6696 13.4963 24.1934 13.2242L23.7981 12.9975C23.3243 12.7262 23.0866 12.5901 22.8345 12.5384C22.6118 12.4926 22.3818 12.4945 22.1599 12.544C21.9094 12.5997 21.6749 12.7397 21.2067 13.0181L21.2043 13.0197L20.921 13.1876C20.8762 13.2146 20.853 13.2274 20.8306 13.2401C20.6081 13.3634 20.36 13.431 20.1047 13.439C20.0791 13.4406 20.0527 13.4406 20.0007 13.4406L19.8966 13.4398C19.6413 13.4317 19.3916 13.363 19.1684 13.2393C19.146 13.2274 19.1244 13.2139 19.0795 13.1868L18.7938 13.0166C18.3225 12.7349 18.0864 12.5949 17.8343 12.5384C17.6115 12.4889 17.3807 12.4872 17.1572 12.5336C16.9043 12.5862 16.6675 12.723 16.1929 12.9967L16.1905 12.9975L15.7999 13.2226L15.7959 13.2258C15.3254 13.4963 15.0893 13.6331 14.9196 13.8233C14.7684 13.9922 14.6552 14.1913 14.5875 14.4072C14.5115 14.6514 14.5155 14.9235 14.5251 15.4677L14.5307 15.805C14.5307 15.8567 14.5331 15.8822 14.5323 15.9068C14.5281 16.1959 14.4448 16.4783 14.2914 16.7239C14.265 16.7684 14.253 16.7907 14.2394 16.8114C14.1044 17.0279 13.9192 17.2091 13.6992 17.3396L13.6095 17.3897L13.3206 17.5489C12.8388 17.8138 12.598 17.9466 12.4235 18.136C12.2684 18.3029 12.151 18.5009 12.0794 18.7167C11.9993 18.961 11.9993 19.2339 12.0001 19.7812L12.0017 20.2291C12.0025 20.7725 12.0041 21.0438 12.085 21.2864C12.1563 21.5009 12.2728 21.6978 12.4267 21.864C12.6012 22.0517 12.8396 22.1838 13.3174 22.4479L13.6039 22.6062C13.6527 22.6333 13.6776 22.646 13.7008 22.6603C13.9516 22.8098 14.1564 23.0247 14.293 23.2817L14.3466 23.3771C14.4818 23.6309 14.5454 23.9162 14.5307 24.2029L14.5251 24.5267C14.5155 25.0725 14.5115 25.3462 14.5883 25.5904C14.6563 25.8068 14.77 26.0065 14.922 26.1759C15.0933 26.3669 15.3318 26.5029 15.8071 26.7758L16.2025 27.0025C16.6771 27.2738 16.9139 27.4098 17.166 27.4615C17.3888 27.5074 17.6188 27.5055 17.8407 27.456C18.092 27.4003 18.3265 27.2603 18.7962 26.9802L19.0795 26.8116L19.17 26.7591C19.3925 26.6365 19.6406 26.5681 19.8958 26.5602L19.9999 26.5594H20.1039C20.3584 26.5673 20.6081 26.6365 20.8322 26.7599L20.9058 26.8036L21.2067 26.9834C21.6789 27.265 21.9142 27.4051 22.1663 27.4608C22.3889 27.5108 22.6198 27.513 22.8433 27.4671C23.0954 27.4146 23.3339 27.277 23.8085 27.0033L24.2046 26.775C24.6752 26.5029 24.9113 26.3669 25.081 26.1767C25.233 26.0073 25.3451 25.8084 25.4131 25.5928C25.4891 25.3501 25.4851 25.0804 25.4755 24.5442L25.4691 24.1942V24.0931C25.4729 23.8039 25.5559 23.5212 25.7092 23.2753L25.7612 23.1878C25.8961 22.9713 26.0814 22.7901 26.3014 22.6595L26.3894 22.611L26.391 22.6102L26.6799 22.4511C27.1617 22.1854 27.4026 22.0533 27.5779 21.864C27.7331 21.6969 27.85 21.498 27.9212 21.2832C28.0012 21.0406 28.0012 20.7685 27.9996 20.2275L27.998 19.7709C27.9972 19.2275 27.9964 18.9554 27.9156 18.7128C27.8439 18.4985 27.7271 18.3019 27.5731 18.136C27.3994 17.9482 27.1609 17.8162 26.6839 17.5528L26.6823 17.552Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.7988 19.9996C16.7988 20.8436 17.1361 21.653 17.7364 22.2498C18.3368 22.8466 19.151 23.1819 20 23.1819C20.849 23.1819 21.6632 22.8466 22.2636 22.2498C22.8639 21.653 23.2012 20.8436 23.2012 19.9996C23.2012 19.1556 22.8639 18.3462 22.2636 17.7494C21.6632 17.1527 20.849 16.8174 20 16.8174C19.151 16.8174 18.3368 17.1527 17.7364 17.7494C17.1361 18.3462 16.7988 19.1556 16.7988 19.9996Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      label: "Account settings",
      path: "settings"
    },
    {
      icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M18.0952 16.1111V14.5556C18.0952 14.143 18.2558 13.7473 18.5416 13.4556C18.8273 13.1639 19.2149 13 19.619 13L26.4762 13C26.8803 13 27.2679 13.1639 27.5537 13.4556C27.8395 13.7473 28 14.143 28 14.5556L28 25.4444C28 25.857 27.8395 26.2527 27.5537 26.5444C27.2679 26.8361 26.8803 27 26.4762 27L19.619 27C19.2149 27 18.8273 26.8361 18.5416 26.5444C18.2558 26.2527 18.0952 25.857 18.0952 25.4444V23.8889H19.619V25.4444L26.4762 25.4444L26.4762 14.5556L19.619 14.5556V16.1111L18.0952 16.1111ZM16.1905 24.2778L17.2678 23.178L14.9166 20.7778L22.6667 20.7778L22.6667 19.2222L14.9166 19.2222L17.2678 16.822L16.1905 15.7222L12 20L16.1905 24.2778Z" fill="#1C1C1C"></path></svg>',
      label: "Sign out",
      path: null, // No path for sign out
      onClick: handleSignOut // Custom click handler
    },
  ];

  return (
    <SidebarContainer>
      <ProfileHeader>Hello, Eminokanju</ProfileHeader>
      <NavContainer>
        {navigationItems.map((item, index) => {
          // Handle Sign out differently - no NavLink wrapper
          if (item.label === "Sign out") {
            return (
              <NavigationItem 
                key={index} 
                icon={item.icon} 
                label={item.label} 
                setCurrentNav={props.setCurrentNav} 
                currentNav={props.currentNav}
                onClick={()=>{item.onClick()}} // Call the custom onClick function
              />
            );
          }
          
          // Regular navigation items with NavLink
          return (
            <NavLink 
              to={windowWidth > 720 ? `/account/${item.path}` : `/accounts/${item.path}`}
              style={{ textDecoration: 'none' }} 
              key={index}
            > 
              <NavigationItem 
                key={index} 
                icon={item.icon} 
                label={item.label} 
                setCurrentNav={props.setCurrentNav} 
                currentNav={props.currentNav} 
              />
            </NavLink>
          );
        })}
      </NavContainer>
    </SidebarContainer>
  );
}


const SidebarContainer = styled.aside`
  width: 375px;
  height: 543px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  @media (max-width: 730px) {
    width: 100%;
    height: auto;
    box-shadow: none;
  }
`;

const ProfileHeader = styled.div`
  width: 100%;
  height: 95px;
  border-radius: 8px 8px 0 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 55px 16px 16px;
  background-color: #727272;
  @media (max-width: 730px) {
    border-radius: 0;
    height: 60px;
    padding: 16px;
  }
  @media (max-width: 480px) {
    height: 50px;
    padding: 16px;
    font-size: 16px;
  }
`;

const NavContainer = styled.nav`
  padding: 12px 0;
  @media (max-width: 730px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const NavItemContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    padding: 6px 4px;
  }
  &.active{
    border-left: 5px solid black;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgba(244, 244, 244, 0.5);
`;

const Label = styled.span`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 240px) {
    font-size: 12px;
  }
`;
