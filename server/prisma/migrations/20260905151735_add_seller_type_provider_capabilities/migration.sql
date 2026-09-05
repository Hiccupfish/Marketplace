-- Add sellerType to SellerProfile
ALTER TABLE "SellerProfile" ADD COLUMN "sellerType" TEXT NOT NULL DEFAULT 'CASUAL';

-- Add providerCapabilities to User
ALTER TABLE "User" ADD COLUMN "providerCapabilities" TEXT;
