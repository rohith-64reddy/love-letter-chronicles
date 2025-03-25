
# Love Journey - Proposal Website

This is a romantic proposal website that tells your love story and leads to a proposal.

## How to run locally

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deploying to GitHub Pages

1. Fork this repository or push it to your GitHub account
2. Set up GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "GitHub Pages" section
   - Select "GitHub Actions" as the source
   - The site will be deployed automatically when you push to the main branch

3. Important: Before deployment, download the images from Unsplash and place them in the `public/images` directory:
   - `unsplash-1488590528505-98d2b5aba04b.jpg`
   - `unsplash-1649972904349-6e44c42644a7.jpg`
   - `unsplash-1581091226825-a6a2a5aee158.jpg`
   - `unsplash-1721322800607-8c38375eef04.jpg`

## Customizing

To personalize this website:
1. Edit the text content in the `JourneyPage.tsx` file
2. Replace the photos with your own by updating the `photoUrl` values
3. Change the name in the `Letter.tsx` component
4. Customize colors and styling in the CSS files

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
