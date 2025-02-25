
# Random Username Generator

A modern, sleek web application that generates unique usernames for social media, gaming platforms, or any other online presence. Built with React, TypeScript, and powered by shadcn/ui components.

## Features

- **Random Username Generation**: Combines curated lists of adjectives and nouns to create unique usernames
- **Customization Options**: 
  - Add random numbers (0-999)
  - Include special characters (!, _, -, x)
- **Modern UI/UX**:
  - Glass-morphism design
  - Smooth animations
  - Responsive layout
  - Copy to clipboard functionality
  - Toast notifications for user feedback

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation and Development

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd <YOUR_PROJECT_NAME>
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

The application will start running at `http://localhost:8080`

## Usage

1. Open the application in your web browser
2. Toggle the customization options as desired:
   - Include Numbers: Adds random numbers to the end of the username
   - Include Special Characters: Adds special characters for extra uniqueness
3. Click "Generate Username" to create a new username
4. Click the copy icon that appears when hovering over the generated username to copy it to your clipboard

## Project Structure

```
src/
├── components/
│   ├── ui/          # UI components from shadcn/ui
│   └── UsernameGenerator.tsx
├── pages/
│   └── Index.tsx    # Main page component
└── index.css        # Global styles and utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for the smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## Support

If you have any questions or run into issues, please open an issue in the GitHub repository.
