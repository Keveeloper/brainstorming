import { Box, Grid, Container, Typography } from "@mui/material";

import { Image } from 'src/components/image';

const sectionTitle = "Nuestros Sponsors";
const sponsors = [
  {
    id: 1,
    name: "Tinkko",
    altText: "Tinkko Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/d8e02a22-53bb-4731-2ea0-3a7133cf3400/public",
    imageHeight: { xs: "80px", sm: "80px", md: "120px" }
  },
  {
    id: 2,
    name: "España abogados",
    altText: "España abogados Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/007d0578-c983-4ce9-b857-bead35e72b00/public",
    imageHeight: { xs: "48px", sm: "60px", md: "80px" }
  },
  {
    id: 3,
    name: "Mazarik",
    altText: "Mazarik Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e6f075eb-ce27-43fc-6a96-0d5dfad0b100/public",
    imageHeight: { xs: "48px", sm: "60px", md: "80px" }
  },
  {
    id: 4,
    name: "Inzolente",
    altText: "Inzolente Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/4cd7a4a1-8e89-4a5b-e7b7-fbdcdff03b00/public",
    imageHeight: { xs: "48px", sm: "60px", md: "80px" }
  },
  {
    id: 5,
    name: "Pronoia coffe company",
    altText: "Pronoia coffe company Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/b1a4ebb9-1832-4698-dfcc-b4914bfb8800/public",
    imageHeight: { xs: "48px", sm: "60px", md: "80px" }
  },
  {
    id: 6,
    name: "Avior Airlines",
    altText: "Avior Airlines Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/fc0f975c-012d-4f03-5e29-e3068c30ca00/public",
    imageHeight: { xs: "36px", sm: "44px", md: "46px" }
  },
  {
    id: 7,
    name: "Createka",
    altText: "Createka Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/13f06e96-4b60-4db4-2020-300255478800/public",
    imageHeight: { xs: "48px", sm: "60px", md: "80px" }
  },
  {
    id: 8,
    name: "Alerta Creative",
    altText: "Alerta Creative Logo",
    logoUrl: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/fffaa7c1-4998-4883-328c-4c412f09c500/public",
    imageHeight: { xs: "36px", sm: "44px", md: "56px" }
  },
]

export function HomeSponsor() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 5 }}>
      <Box
        sx={{ textAlign: "center", mb: 5 }}>
        <Typography
        variant="h3" sx={{ fontWeight: 700, color: "#c106ff", fontSize: '1.5rem' }}>
          {sectionTitle}
        </Typography>
      </Box>
      <Grid
        container
        spacing={12}
        justifyContent="center"
        alignItems="center"
      >
        {sponsors.map((sponsor) => (
          <Grid
            key={sponsor.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {sponsor.logoUrl ? (
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.altText}
                sx={{
                  height: sponsor.imageHeight || { xs: "48px", sm: "60px", md: "80px" },
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            ) : (
              <Typography variant="subtitle1" color="text.secondary" align="center">
                {sponsor.name}
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}