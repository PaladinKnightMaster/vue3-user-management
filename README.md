# Vue 3 User Management

## Overview

Vue 3 User Management is a modern, responsive web application for managing users, built with Vue 3, SCSS, and Axios. This project demonstrates fundamental concepts of Vue such as component-based architecture, state management, API integration, and responsive design using SCSS mixins and breakpoints. The application allows adding, editing, and viewing users with clean UI and smooth interactions.

## Features

- **User Management**: Add, edit, and view user details.
- **Responsive Design**: Fully responsive with breakpoints for various screen sizes (large, medium, small).
- **Modal Components**: Seamless user interaction with modals for adding and editing users.
- **API Integration**: Fetch users from a backend server using Axios.
- **Clean and Modern UI**: User-friendly interface with SCSS-based styling.
- **State Management**: Manage user state with component-based event handling.
- **Sidebar Toggle**: Sidebar navigation for larger screens with a floating, collapsible sidebar for smaller devices.

## Tech Stack

- **Vue 3**: Frontend JavaScript framework.
- **Axios**: For API calls.
- **SCSS**: Used for styling with custom mixins and responsive design.
- **Vite**: Modern frontend build tool (or Vue CLI based on your setup).

## Setup and Installation

1. **Clone the repository:**

```bash
git clone https://github.com/paladinknightmaster/vue3-user-management.git
cd vue3-user-management
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Build the project for production:**

```bash
npm run build
```

5. **Run the linter:**

```bash
npm run lint
```

## Project Structure

```bash
├── public/             # Static assets (favicon, icons, etc.)
├── src/
│   ├── assets/         # Images, icons, and other assets
│   ├── components/     # Reusable Vue components (UserSidebar, UserDetails, UserModal, etc.)
│   ├── apis/           # Axios API calls for user management
│   ├── styles/         # SCSS files for styling and mixins
│   ├── views/          # View components (e.g., HomePage.vue)
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── package.json        # Project metadata and npm scripts
└── vue.config.js       # Vue3 configuration
```

## Features in Detail

### Sidebar Navigation

- The sidebar provides navigation between users. It collapses into a floating sidebar on small screens and can be toggled using a menu icon.

### Modals for Adding/Editing Users

- A modal interface allows users to add or edit user details with validation. The modal form checks if all required fields are filled before enabling the submit button.

### Responsive Design

- Custom SCSS mixins allow for dynamic adjustments to screen size. The sidebar and user details section are fluid, and the design adapts to mobile, tablet, and desktop devices.

### Axios API Integration

- Axios is used for fetching user data and making HTTP requests to the backend, ensuring a smooth interaction with the server.

## SCSS Mixins and Breakpoints

The project includes custom SCSS mixins for breakpoints:

```scss
// styles/_mixins.scss

$large: 1400px;
$medium: 1024px;
$small: 375px;

@mixin sm {
  @media (min-width: #{$small}) {
    @content;
  }
}

@mixin max-sm {
  @media (max-width: #{$small}) {
    @content;
  }
}

@mixin md {
  @media (min-width: #{$medium}) {
    @content;
  }
}

@mixin max-md {
  @media (max-width: #{$medium}) {
    @content;
  }
}

@mixin lg {
  @media (min-width: #{$large}) {
    @content;
  }
}

@mixin max-lg {
  @media (max-width: #{$large}) {
    @content;
  }
}
```

## API Endpoints

The following API endpoints are used in this project (replace with actual backend endpoints):

- **GET /users**: Fetch all users.
- **POST /users**: Add a new user.
- **PUT /users/:id**: Update a user.

## Future Improvements

- **Authentication**: Add user authentication (login/register functionality).
- **Pagination**: Implement pagination for large user datasets.
- **Testing**: Write unit and integration tests using Vue Test Utils or Jest.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.