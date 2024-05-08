# Quick Start for Fitrah

Welcome to Fitrah, the mobile app designed to help Muslims users during their day. Whether you're looking to fix bugs, add features, or improve documentation, your help is invaluable. This guide will provide you with all the necessary information to get started with contributing to Fitrah.

## Prerequisites

Before contributing, please ensure you have the following tools installed based on what you're looking to do:

### For Documentation Contribution

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/Fitrah.git
    cd Fitrah
    ```

2. **Install Node.js (version 12.x or later) & NPM:**
    - You can donwload and install Node.js from [here](https://nodejs.org/en/download/).
    - Make sure it's `LTS` and choose you correct OS.

3. **Start Contributing to our `.md`:**
    ```bash
    cd docs
    npm run docs:dev
    ```

### For iOS App Contribution

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/Fitrah.git
    cd Fitrah
    ```

2. **Install Dependencies:**
    ```bash
    make setup_for_development
    ```

3. **Build the Main App:**
    ```bash
    make build_main_app
    ```

4. **Generate Xcode Project and Start Coding:**
    ```bash
    make generate_xcode_project
    open Fitrah.xcodeproj
    ```