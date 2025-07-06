# 🎮 React Native Number Guessing Game

A fun and interactive number guessing game built with React Native and Expo. The computer tries to guess your number while you guide it with "higher" or "lower" hints!

## 📱 Game Features

- **Interactive Gameplay**: Pick a number and let the computer guess it
- **Smart AI**: Computer uses binary search algorithm to efficiently guess your number
- **Beautiful UI**: Modern design with gradients, custom components, and smooth animations
- **Cross-Platform**: Works on both iOS and Android devices
- **Responsive Design**: Optimized for different screen sizes

## 🎯 How to Play

1. **Start Game**: Enter a number between 1-100
2. **Computer Guesses**: The app will make its first guess
3. **Give Hints**: 
   - Tap **"+"** if your number is **higher**
   - Tap **"-"** if your number is **lower**
4. **Win Condition**: Game ends when computer guesses correctly
5. **Play Again**: Start a new round with a different number

## 🏗️ Project Structure

```
react-native/
├── App.js                 # Main app component with navigation logic
├── screens/
│   ├── StartGameScreen.js # Initial screen for number input
│   ├── GameScreen.js      # Main game screen with guessing logic
│   └── GameOverScreen.js  # End screen with results
├── components/
│   ├── ui/
│   │   ├── PrimaryButton.js     # Reusable button component
│   │   ├── Title.js             # Styled title component
│   │   ├── Card.js              # Container card component
│   │   └── InstructionText.js   # Styled instruction text component
│   └── game/
│       └── NumberContainer.js   # Display container for numbers
├── constants/
│   └── colors.js          # App color theme
└── assets/
    ├── images/
    │   └── background.png # Background image
    └── [icons and splash screens]
```

## 🛠️ Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and toolchain
- **React Hooks**: State management with useState and useEffect
- **Linear Gradient**: Beautiful gradient backgrounds
- **Custom Components**: Reusable UI components
- **Modern JavaScript**: ES6+ features

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone (for testing)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-native
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device**
   - Scan the QR code with Expo Go app (iOS/Android)
   - Or use simulator: `i` for iOS, `a` for Android

## 🎨 Design System

### Color Palette
- **Primary**: `#72063c` (Deep burgundy)
- **Secondary**: `#ddb52f` (Golden yellow)
- **Accent**: Various shades for depth and contrast

### Components
- **PrimaryButton**: Reusable button with hover effects
- **Title**: Styled text component with borders
- **Card**: Container component with shadow and styling
- **InstructionText**: Styled text component for game instructions
- **NumberContainer**: Highlighted display for numbers

## 🧮 Game Algorithm

The computer uses an efficient binary search algorithm:

1. **Initial Range**: 1-100
2. **Smart Guessing**: Always picks the middle of current range
3. **Range Adjustment**: 
   - If "higher": `minBoundary = currentGuess + 1`
   - If "lower": `maxBoundary = currentGuess - 1`
4. **Optimal Performance**: Guarantees finding any number in maximum 7 attempts

## 🔧 Development Notes

### Key Features Implemented
- ✅ Number input validation
- ✅ Binary search algorithm
- ✅ Game state management
- ✅ Cross-screen navigation
- ✅ Error handling and alerts
- ✅ Responsive design
- ✅ Modern UI/UX

### Code Quality
- Clean component architecture
- Proper state management with React Hooks
- Reusable component library
- Consistent styling with StyleSheet
- Error boundary handling

## 🐛 Debugging Features

Development build includes console logging for:
- Game state changes
- User number validation
- Computer guess generation
- Game over conditions

## 📝 Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Screenshots

*[Add screenshots of the game screens here]*

## 🔮 Future Enhancements

- [ ] Difficulty levels (different number ranges)
- [ ] Score tracking and leaderboards
- [ ] Sound effects and animations
- [ ] Multiplayer mode
- [ ] Custom themes
- [ ] Statistics and analytics

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ using React Native and Expo

---

**Happy Gaming! 🎮** 