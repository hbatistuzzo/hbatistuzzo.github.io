import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 420px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
  width: 100%;  // Ensure it takes full width available
  max-width: 1800px;  // You can adjust this value as needed for a wider layout
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 140px;  // Increased width for more space
  min-width: 140px;  // Adjust to your preference
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 75px;  // Adjust height to suit the wider tech block
  width: 75px;   // Adjust width to match the aspect ratio
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 16px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;  // Set max-width for page content
  margin: 0 auto;  // Center content horizontally
  padding: 0 20px; // Optional: padding on sides to make the content not too tight to the edges
`;

