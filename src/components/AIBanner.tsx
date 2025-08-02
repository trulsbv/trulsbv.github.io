import { useState } from "react";
import styled from "styled-components";

const BannerContainer = styled.div<{ $isVisible: boolean }>`
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
`;

const AIIcon = styled.span`
  font-size: 1.1rem;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`;

const BannerText = styled.span`
  font-weight: 600;
`;

const VersionBadge = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

const DismissButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }
`;

const AIBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <BannerContainer $isVisible={isVisible}>
      <BannerContent>
        <AIIcon>🤖</AIIcon>
        <BannerText>First Version - Created by AI</BannerText>
        <VersionBadge>v1.0</VersionBadge>
      </BannerContent>
      <DismissButton onClick={handleDismiss} title="Dismiss banner">
        ×
      </DismissButton>
    </BannerContainer>
  );
};

export default AIBanner;
