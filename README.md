# Appliance Energy Consumption Website

A clean, professional website showcasing energy consumption information for household appliances, with a design inspired by Apple's minimalist aesthetic.

## Project Structure

- `index.html` - Home page with overview of appliance energy consumption
- `televisions.html` - Detailed information about TV energy usage with interactive charts
- `about.html` - Information about the website and its mission
- `styles.css` - All styling for the website
- `script.js` - JavaScript functionality for interactive elements
- `charts.js` - Chart.js configurations and data visualizations
- `data-story.js` - Data processing and story narrative logic
- `README.md` - Project documentation
- `assets/` - Image assets and visualization exports
  - `PowerIcon.png` - Power consumption icon
  - `q1.png` to `q6.png` - Visualization exports from KNIME analysis

## JavaScript Usage Explanation

The JavaScript in this project serves several important functions:

### 1. Dynamic Content Updates
- Updates the copyright year automatically in the footer
- Handles navigation highlighting to show the current page

### 2. User Interaction Enhancements
- Adds hover effects to navigation links for better user feedback
- Implements smooth scrolling for anchor links
- Creates a subtle header effect on scroll for visual appeal

### 3. Page-Specific Functionality (televisions.html)
- Renders interactive charts using Chart.js to visualize TV energy data
- Displays consumption comparisons, cost trends, and market share

### 4. Responsive Behavior
- Enhances the user experience across different device sizes
- Maintains functionality on both desktop and mobile devices

## Design Philosophy

The website follows Apple's design principles:
- Clean, minimalist aesthetic with ample white space
- Consistent color palette using static colors instead of gradients
- Typography-focused layout with clear hierarchy
- Subtle animations and transitions for polished interactions

## Data Story

### Target Audience
This visualization is designed for **Australian homeowners and renters** who are making decisions about purchasing new televisions or want to understand their current TV's impact on their electricity bills. Our audience characteristics include:

- **Demographics**: Adults aged 25-65 who are tech-conscious consumers
- **Motivation**: Interested in reducing energy costs and environmental impact
- **Knowledge level**: Basic understanding of energy consumption but may not know specific TV technology differences
- **Decision context**: Researching TV purchases, comparing running costs, or seeking energy-saving strategies

### Audience Interests
Our audience wants to know:
1. **Which TV technology is most energy-efficient?** - Critical for purchase decisions
2. **What will it cost to run different TV types?** - Direct impact on household budgets
3. **How can I reduce my current TV's energy consumption?** - Immediate actionable insights
4. **Are newer TV technologies worth the investment?** - ROI analysis for upgrades

### Visualization Guidelines
Based on our audience analysis, our visualizations prioritize:
- **Clear cost comparisons** using familiar Australian dollar amounts
- **Practical consumption data** showing real-world usage scenarios (4 hours/day)
- **Technology comparisons** that help differentiate between LED, OLED, QLED options
- **Actionable insights** that can be immediately applied to reduce energy consumption

## About the Data

### Data Source
The television energy consumption data used in this project is derived from:
- Australian Energy Rating schemes and standards
- Manufacturer specifications from major TV brands (Samsung, LG, Sony, TCL)
- Australian Bureau of Statistics energy consumption patterns
- Energy Star rating database for televisions sold in Australia

### Data Processing
The data was processed using KNIME Analytics Platform with the following workflow:

1. **CSV Reader**: Imported raw television specification data
2. **Column Filter**: Selected relevant columns (Model_No, Submit_ID, Brand, Screen_Size, Power_Consumption, etc.)
3. **Missing Value**: Handled missing data points using median imputation for numerical values
4. **Sorter**: Applied dual sorting criteria:
   - Model_No → ascending (A–Z) to group duplicates together
   - Submit_ID → descending (highest first) to keep most recent records
5. **Duplicate Row Filter**: Removed duplicates based on Model_No, retaining the first row (newest record)
6. **Row Filter**: Excluded incomplete or invalid entries
7. **String Manipulation**: Standardized brand names to correct case-sensitive variations (e.g., "Samsung" vs "SAMSUNG")
8. **Math Formula**: Converted screen size from cm to inches using formula: `$screensize$ * 0.3937`, rounded and stored in new column "screensize_inches"
9. **Rule Engine**: Grouped TVs into screen size categories:
   - Small: < 32 inches
   - Medium: 33–54 inches
   - Large: 55–74 inches
   - Extra Large: 75+ inches

Final dataset includes energy consumption calculations, annual cost derivations based on average usage patterns (4 hours/day), and validation against manufacturer specifications.

### Privacy
- All data used is aggregated and anonymized
- No personally identifiable information is included
- Data represents population-level trends, not individual consumption

### Accuracy and Limitations
**Accuracy Considerations:**
- Data represents averages across multiple households
- Actual consumption may vary based on usage patterns
- Cost calculations assume standard electricity rates

**Limitations:**
- Does not account for regional electricity price variations
- Based on typical usage patterns (4 hours/day)
- Newer TV models may have improved efficiency

### Ethics
- Data presented supports informed consumer decision-making
- No commercial bias or brand promotion
- Environmental impact calculations use standard conversion factors
- Recommendations are practical and accessible to most households

## AI Declaration

This project utilized AI assistance in the following areas:
- Code structure and organization
- Data visualization implementation
- Content structuring and narrative flow
- CSS styling and responsive design

All data analysis, insights, and final content decisions were made by the author. AI tools were used as assistants for implementation, not for data interpretation or analytical reasoning.

## Deployment

This website is hosted on Vercel and can be accessed at: https://cos30045-iota.vercel.app/ 

## Local Development

To run this project locally:
1. Clone the repository
2. Open `index.html` in a web browser
3. Navigate between pages using the top navigation