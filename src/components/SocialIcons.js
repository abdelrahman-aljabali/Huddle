import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li key="twitter">
        <a href="https://twitter.com" aria-label="Twitter">
          <FaTwitter />
        </a>
      </li>
      <li key="facebook">
        <a href="https://facebook.com" aria-label="Facebook">
          <FaFacebook />
        </a>
      </li>
      <li key="linkedin">
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
