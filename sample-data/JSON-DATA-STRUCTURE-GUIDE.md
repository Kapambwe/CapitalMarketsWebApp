# JSON Data Structure Guide for Investment Web Application

## Overview
This document outlines the JSON file structure required for the Investment Web Application based on the mock services from `CompanyApp.Components.CapitalMarkets` and `Component.Investment.Business` projects.

## Base Path Convention
All JSON files should be placed in: `wwwroot/sample-data/`

The mock services use the path pattern: `_content/CompanyApp.Components.CapitalMarkets/sample-data/`

---

## 1. Market Data Service (MockMarketDataService)

### 1.1 Market Summary
**File:** `capital-markets/market-summary.json`

```json
{
  "totalMarketCap": 0.0,
  "dailyVolume": 0.0,
  "activeInstruments": 0,
  "topGainer": "",
  "topGainerChange": 0.0,
  "topLoser": "",
  "topLoserChange": 0.0,
  "lastUpdated": "2024-01-01T00:00:00Z"
}
```

### 1.2 Performance Data
**File:** `capital-markets/performance-data.json`

```json
[
  {
    "date": "2024-01-01T00:00:00Z",
    "value": 100.0,
    "label": "Portfolio"
  }
]
```

### 1.3 Benchmark Data
**File:** `capital-markets/benchmark-data.json`

```json
[
  {
    "date": "2024-01-01T00:00:00Z",
    "value": 100.0,
    "label": "Benchmark"
  }
]
```

### 1.4 Sector Allocation
**File:** `capital-markets/sector-allocation.json`

```json
[
  {
    "sector": "Technology",
    "percentage": 0.25,
    "value": 250000.0
  }
]
```

---

## 2. Instrument Service (MockInstrumentService)

### 2.1 Financial Instruments
**File:** `capital-markets/instruments.json`

```json
[
  {
    "instrumentId": "INST-001",
    "name": "Government Bond 2025",
    "type": "Bond",
    "issuer": "Ministry of Finance",
    "currency": "ZMW",
    "currentPrice": 1000.0,
    "minimumInvestment": 5000.0,
    "maturityDate": "2025-12-31T00:00:00Z",
    "interestRate": 0.08,
    "riskRating": "Low",
    "isActive": true,
    "description": "5-year government bond"
  }
]
```

### 2.2 Instrument Types
**File:** `capital-markets/instrument-types.json`

```json
[
  "Bond",
  "Equity",
  "Money Market",
  "ETF",
  "Mutual Fund"
]
```

---

## 3. Citizen Investor Service (MockCitizenInvestorService)

### 3.1 Investors
**File:** `citizens/investors.json`

```json
[
  {
    "investorId": "INV-001",
    "nrc": "123456/78/9",
    "fullName": "John Doe",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "email": "john.doe@example.com",
    "phoneNumber": "+260971234567",
    "mobileMoneyNumber": "+260971234567",
    "residentialAddress": "123 Main Street, Lusaka",
    "registrationDate": "2024-01-01T00:00:00Z",
    "kycStatus": "Approved",
    "isActive": true,
    "accounts": [
      {
        "accountId": "ACC-001",
        "type": "Individual",
        "currency": "ZMW",
        "balance": 50000.0,
        "openedDate": "2024-01-01T00:00:00Z",
        "status": "Active",
        "holdings": [
          {
            "holdingId": "HOLD-001",
            "instrumentId": "INST-001",
            "instrumentName": "Government Bond 2025",
            "units": 10.0,
            "averageCost": 1000.0,
            "currentValue": 10500.0,
            "gainLoss": 500.0,
            "gainLossPercent": 0.05
          }
        ]
      }
    ],
    "goals": [
      {
        "goalId": "GOAL-001",
        "type": "Retirement",
        "customName": "Retirement Fund",
        "targetAmount": 500000.0,
        "currentAmount": 50000.0,
        "targetDate": "2040-12-31T00:00:00Z",
        "monthlyContribution": 2000.0,
        "priority": "High",
        "isActive": true,
        "progressPercentage": 0.10
      }
    ]
  }
]
```

### 3.2 Recommended Portfolios
**File:** `citizens/portfolios.json`

```json
[
  {
    "portfolioId": "PORT-001",
    "name": "Conservative",
    "riskLevel": "Low",
    "description": "Low-risk portfolio for capital preservation",
    "allocation": [
      {
        "assetClass": "Bonds",
        "percentage": 0.70
      },
      {
        "assetClass": "Money Market",
        "percentage": 0.30
      }
    ],
    "expectedReturn": 0.06,
    "volatility": 0.03
  }
]
```

---

## 4. State-Owned Enterprise Service (MockSOEService)

### 4.1 SOEs
**File:** `soe/soes.json`

```json
[
  {
    "soeId": "SOE-001",
    "name": "Zambia Electricity Supply Corporation",
    "acronym": "ZESCO",
    "sector": "Energy",
    "category": "Strategic",
    "description": "National electricity utility",
    "establishedDate": "1970-01-01T00:00:00Z",
    "employees": 5000,
    "annualRevenue": 5000000000.0,
    "totalAssets": 10000000000.0,
    "website": "https://www.zesco.co.zm",
    "leadership": {
      "ceo": {
        "name": "Jane Smith",
        "appointedDate": "2020-01-01T00:00:00Z",
        "qualifications": "MBA, Engineering",
        "experience": "20 years in energy sector"
      },
      "boardChair": {
        "name": "John Brown",
        "appointedDate": "2019-01-01T00:00:00Z"
      },
      "boardMembers": [
        {
          "name": "Alice Johnson",
          "role": "Board Member",
          "appointedDate": "2021-01-01T00:00:00Z"
        }
      ]
    }
  }
]
```

### 4.2 SOE Summary
**File:** `soe/soe-summary.json`

```json
{
  "totalSOEs": 50,
  "totalEmployees": 150000,
  "totalAssets": 500000000000.0,
  "totalRevenue": 100000000000.0,
  "sectorBreakdown": [
    {
      "sector": "Energy",
      "count": 5,
      "percentage": 0.10
    }
  ]
}
```

### 4.3 SOE Instrument Summary
**File:** `soe/soe-instruments-summary.json`

```json
[
  {
    "soeId": "SOE-001",
    "soeName": "ZESCO",
    "instrumentId": "INST-SOE-001",
    "instrumentType": "Bond",
    "outstandingAmount": 1000000000.0,
    "maturityDate": "2030-12-31T00:00:00Z",
    "interestRate": 0.09
  }
]
```

---

## 5. Private Sector Service (MockPrivateSectorService)

### 5.1 Private Sector Entities
**File:** `private-sector/entities.json`

```json
[
  {
    "entityId": "PS-001",
    "name": "ABC Manufacturing Ltd",
    "industry": "Manufacturing",
    "sizeCategory": "Medium",
    "registrationNumber": "REG-12345",
    "registrationDate": "2015-01-01T00:00:00Z",
    "employees": 250,
    "annualRevenue": 50000000.0,
    "isWomanOwned": false,
    "isYouthOwned": false,
    "exportOriented": true,
    "leadership": {
      "ceo": {
        "name": "Peter Mwansa",
        "appointedDate": "2015-01-01T00:00:00Z",
        "qualifications": "MBA",
        "experience": "15 years"
      }
    }
  }
]
```

### 5.2 Private Sector Summary
**File:** `private-sector/summary.json`

```json
{
  "totalEntities": 5000,
  "totalEmployees": 500000,
  "womanOwnedCount": 1500,
  "youthOwnedCount": 800,
  "industryBreakdown": [
    {
      "industry": "Manufacturing",
      "count": 500,
      "percentage": 0.10
    }
  ]
}
```

---

## 6. PPP Service (MockPPPService)

### 6.1 PPP Projects
**File:** `ppp/projects.json`

```json
[
  {
    "projectId": "PPP-001",
    "projectName": "Lusaka-Ndola Highway",
    "sector": "Transport",
    "type": "BuildOperateTransfer",
    "description": "Highway construction and maintenance",
    "grantor": "Road Development Agency",
    "concessionaire": "Highway Builders Ltd",
    "location": "Lusaka to Ndola",
    "status": "UnderConstruction",
    "registrationDate": "2020-01-01T00:00:00Z",
    "financials": {
      "totalProjectCost": 5000000000.0,
      "governmentContribution": 2000000000.0,
      "privateContribution": 3000000000.0,
      "currency": "ZMW"
    },
    "milestones": []
  }
]
```

### 6.2 PPP Milestones
**File:** `ppp/milestones.json`

```json
[
  {
    "milestoneId": "MS-001",
    "projectId": "PPP-001",
    "name": "Foundation Complete",
    "description": "Complete foundation work for section A",
    "value": 500000000.0,
    "dueDate": "2024-06-30T00:00:00Z",
    "status": "Completed",
    "independentVerificationRequired": true,
    "requiredEvidence": ["Photos", "Engineer Report"]
  }
]
```

---

## 7. Risk Engine Service (MockRiskEngineService)

### 7.1 Supply Chain Risks
**File:** `risk/supply-chain-risks.json`

```json
[
  {
    "entityId": "PS-001",
    "entityName": "ABC Manufacturing Ltd",
    "overallScore": 65.5,
    "riskLevel": "Medium",
    "calculatedAt": "2024-01-01T00:00:00Z",
    "factors": {
      "geographicConcentration": 0.70,
      "supplierDependency": 0.60,
      "logisticsComplexity": 0.65
    }
  }
]
```

### 7.2 Investability Scores
**File:** `risk/investability-scores.json`

```json
[
  {
    "smeId": "PS-001",
    "smeName": "ABC Manufacturing Ltd",
    "overallScore": 72.5,
    "rating": "B+",
    "calculatedAt": "2024-01-01T00:00:00Z",
    "components": {
      "financialHealth": 75.0,
      "marketPosition": 70.0,
      "managementQuality": 72.0,
      "growthPotential": 73.0
    }
  }
]
```

### 7.3 Stress Test Results
**File:** `risk/stress-tests.json`

```json
[
  {
    "resultId": "ST-001",
    "scenarioId": "SCENARIO-001",
    "portfolioId": "PORT-001",
    "executedAt": "2024-01-01T00:00:00Z",
    "baselineValue": 1000000.0,
    "stressedValue": 850000.0,
    "loss": 150000.0,
    "lossPercentage": 0.15,
    "breachedLimits": []
  }
]
```

---

## 8. Social Credit Service (MockSocialCreditService)

### 8.1 Social Credit Scores
**File:** `social-credit/scores.json`

```json
{
  "SOE-001": {
    "entityId": "SOE-001",
    "entityName": "ZESCO",
    "score": 850,
    "rating": "AAA",
    "lastUpdated": "2024-01-01T00:00:00Z",
    "category": "Excellent"
  }
}
```

### 8.2 SOE Credit Distribution
**File:** `social-credit/soe-distribution.json`

```json
[
  {
    "rating": "AAA",
    "count": 5,
    "percentage": 0.10
  },
  {
    "rating": "AA",
    "count": 10,
    "percentage": 0.20
  }
]
```

### 8.3 Private Sector Credit Distribution
**File:** `social-credit/private-sector-distribution.json`

```json
[
  {
    "rating": "A",
    "count": 500,
    "percentage": 0.10
  }
]
```

### 8.4 Blacklisted Entities
**File:** `social-credit/blacklist.json`

```json
[
  {
    "entityId": "PS-999",
    "entityName": "Bad Actor Ltd",
    "reason": "Tax evasion",
    "blacklistedDate": "2023-01-01T00:00:00Z",
    "expiryDate": "2025-01-01T00:00:00Z"
  }
]
```

### 8.5 Score Breakdowns
**File:** `social-credit/score-breakdowns.json`

```json
{
  "SOE-001": {
    "entityId": "SOE-001",
    "totalScore": 850,
    "components": {
      "financialCompliance": 200,
      "taxCompliance": 180,
      "employmentPractices": 170,
      "environmentalCompliance": 150,
      "socialResponsibility": 150
    }
  }
}
```

---

## 9. Country-Specific Data Structure

For each country folder created (e.g., `kenya`, `nigeria`, `south-africa`), create the following structure:

### 9.1 Regulator Data
**Path:** `{country}/Regulator/{regulator-name}/info.json`

```json
{
  "regulatorId": "REG-KE-001",
  "name": "Capital Markets Authority",
  "country": "Kenya",
  "establishedDate": "1989-01-01T00:00:00Z",
  "website": "https://www.cma.or.ke",
  "contactEmail": "info@cma.or.ke",
  "mandate": "Regulate and develop capital markets",
  "regulatedEntities": 150
}
```

### 9.2 Institutional Investor Data
**Path:** `{country}/Institutional-Investors/{investor-name}/profile.json`

```json
{
  "investorId": "II-KE-001",
  "name": "NSSF Kenya",
  "type": "Pension Fund",
  "country": "Kenya",
  "assetsUnderManagement": 500000000000.0,
  "currency": "KES",
  "establishedDate": "1965-01-01T00:00:00Z",
  "members": 2000000,
  "investmentStrategy": "Diversified long-term growth"
}
```

### 9.3 Retail Investor Data
**Path:** `{country}/Retailers/{investor-name}/profile.json`

```json
{
  "investorId": "RET-KE-001",
  "fullName": "Wanjiku Kamau",
  "country": "Kenya",
  "registrationDate": "2023-01-01T00:00:00Z",
  "investorType": "Individual",
  "riskProfile": "Moderate",
  "portfolioValue": 500000.0,
  "currency": "KES"
}
```

---

## 10. File Naming Conventions

1. Use lowercase with hyphens for file names: `market-summary.json`
2. Use descriptive folder names: `capital-markets/`, `citizens/`, `soe/`
3. Keep JSON files organized by service domain
4. Use ISO 8601 format for dates: `2024-01-01T00:00:00Z`
5. Use decimal numbers for monetary values: `1000.0`
6. Use camelCase for JSON property names

---

## 11. Data Generation Guidelines

### For Each Country:
1. Create realistic regulator information based on actual regulatory bodies
2. Generate 4 institutional investors with appropriate AUM for the country
3. Create 4 retail investors with culturally appropriate names
4. Ensure currency codes match the country (KES, ZMW, NGN, ZAR, etc.)

### For Financial Data:
1. Use realistic market values appropriate to the country's economy
2. Ensure dates are consistent and logical
3. Calculate percentages and derived values correctly
4. Include both historical and current data where applicable

### For Risk Scores:
1. Use scores between 0-100 or 0-1000 depending on the metric
2. Include breakdown components that sum to the total
3. Provide meaningful risk ratings (Low, Medium, High or AAA, AA, A, etc.)

---

## 12. Required JSON Files Summary

### Capital Markets (14 files)
- `capital-markets/market-summary.json`
- `capital-markets/performance-data.json`
- `capital-markets/benchmark-data.json`
- `capital-markets/sector-allocation.json`
- `capital-markets/instruments.json`
- `capital-markets/instrument-types.json`

### Citizens (2 files)
- `citizens/investors.json`
- `citizens/portfolios.json`

### SOE (3 files)
- `soe/soes.json`
- `soe/soe-summary.json`
- `soe/soe-instruments-summary.json`

### Private Sector (2 files)
- `private-sector/entities.json`
- `private-sector/summary.json`

### PPP (2 files)
- `ppp/projects.json`
- `ppp/milestones.json`

### Risk (3 files)
- `risk/supply-chain-risks.json`
- `risk/investability-scores.json`
- `risk/stress-tests.json`

### Social Credit (5 files)
- `social-credit/scores.json`
- `social-credit/soe-distribution.json`
- `social-credit/private-sector-distribution.json`
- `social-credit/blacklist.json`
- `social-credit/score-breakdowns.json`

### Per Country (3 files × 19 countries = 57 files)
- `{country}/Regulator/{name}/info.json`
- `{country}/Institutional-Investors/{name}/profile.json` (×4)
- `{country}/Retailers/{name}/profile.json` (×4)

**Total: ~88 JSON files minimum**

---

## Next Steps

1. Create the folder structure for all required JSON files
2. Generate sample data for each file based on the schemas above
3. Populate country-specific data with realistic information
4. Test the application to ensure all mock services can load the data
5. Validate JSON syntax and data consistency
6. Add more detailed data as needed for specific features

---

*Document Version: 1.0*  
*Last Updated: 2024*
