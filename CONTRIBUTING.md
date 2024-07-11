# RemNote Plugins Contribution Guide

Welcome! This repository contains multiple plugins used in the RemNote application.

## Prerequisite

Ensure you have Node.js installed.

```sh
node -v
```

Install `pnpm` as a global package:

```sh
npm install -g pnpm
```

## Getting Started

### 1. Fork the Repository: 

Fork this repository to your GitHub account by clicking the “Fork” button at the top right of the repository page.

### 2. Clone Your Fork: 

Clone your forked repository to your local machine. Choose one of the following options:

```sh
git clone git@github.com:<your-username>/remnote-plugins.git
```

```sh
git clone https://github.com/<your-username>/remnote-plugins.git
```

### 3. Navigate to the Repository Directory:

```sh
cd remnote-plugins
```

### 4. Install Dependencies

```sh
pnpm install
```

### 5. Contibuting

#### 5.1 Create a Branch: 

Create a new branch for your own plugin, new feature or bug fix:

```sh
git checkout -b REM-000-YOURBRANCHNAME
```

#### 5.2 Execute scripts as specified in package.json. 

For example, to run the Kanban plugin development environment:

```sh
npm run kanban
```

#### 5.3 Make Changes: 

Implement your changes in the appropriate files.

#### 5.4 Commit Changes: 

Commit your changes with a descriptive message:

```sh
git commit -m "feat: add new awesome feature blahblah"
```

#### 5.5 Push Changes: 

Push your changes to your forked repository:

```sh
git push origin REM-000-YOURBRANCHNAME
```

#### 5.6 Create a Pull Request: 

Open a pull request to the main branch of this repository.


That's it!
Thank you for contributing!