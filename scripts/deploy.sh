#!/bin/bash

# DINOORA Deployment Script
# Automated deployment and pre-flight checks

set -e

echo "🚀 DINNOORA Deployment Script"
echo "=============================="

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo "📦 Checking dependencies..."
if ! command -v node &> /dev/null; then
    echo -e "${RED} Node.js is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js installed${NC}"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠ pnpm not found, using npm${NC}"
    PACKAGE_MANAGER="npm"
else
    PACKAGE_MANAGER="pnpm"
fi
echo -e "${GREEN}✓ Using $PACKAGE_MANAGER${NC}"

# Install dependencies
echo -e "\n${YELLOW}📥 Installing dependencies...${NC}"
$PACKAGE_MANAGER install

# Run linting
echo -e "\n${YELLOW}🔍 Running linter...${NC}"
if $PACKAGE_MANAGER run lint 2>/dev/null; then
    echo -e "${GREEN}✓ Linting passed${NC}"
else
    echo -e "${YELLOW}⚠ Linting has warnings${NC}"
fi

# Build
echo -e "\n${YELLOW}🔨 Building application...${NC}"
$PACKAGE_MANAGER run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ Deployment ready!${NC}"
echo -e "${GREEN}Run: $PACKAGE_MANAGER start${NC}"
