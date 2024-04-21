<p align="center">
  <h1> Photo Editor AI</h1>
</p>
<p align="center">
    <em>Transforming images, empowering creativity!</em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. -->
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=default&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=default&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=default&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Stripe-008CDD.svg?style=default&logo=Stripe&logoColor=white" alt="Stripe">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

## Overview

The project, named PhotoStudio AI, combines Tailwind CSS theming, Next.js routing, and Clerk user authentication to deliver a seamless photo-editing experience. It enables users to create, update, and transform images with custom animations and responsive layouts. Through Stripe integration, users can purchase credits for advanced editing features, enhancing the overall image processing workflow. The project strategically manages user profiles, credit balances, and transaction processing while offering a visually cohesive design system. Smooth navigation, dynamic image collections, and secure data handling underscore its value proposition in modern web application development.

---

## Features

|     | Feature          | Description                                                                                                                                                                                                                                                                     |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture** | The project's architecture is built using Next.js with TypeScript, integrating Tailwind CSS for styling and MongoDB for database operations. Middleware is used for authentication, and various webhooks manage events from Clerk and Stripe services. function inputs/outputs. |
| 🔌  | **Integrations** | Key integrations include Clerk for user authentication, Stripe for payment processing, Cloudinary for image storage, and various @radix-ui components for UI enhancements. Webhooks manage events from external services efficiently.                                           |
| 🧩  | **Modularity**   | The codebase is highly modular with reusable components like transformations, user actions, and UI elements. Separation of concerns is maintained, facilitating easy maintenance and extensibility.                                                                             |
| 📦  | **Dependencies** | Key external libraries include svix, @stripe/stripe-js, mongoose, tailwindcss, and zod, among others. These libraries enhance functionality and aid in development tasks.                                                                                                       |

---

## Repository Structure

```sh
└── ./
    ├── README.md
    ├── TODO.md
    ├── app
    │   ├── (auth)
    │   ├── (root)
    │   ├── api
    │   ├── globals.css
    │   ├── icon.ico
    │   └── layout.tsx
    ├── components
    │   ├── shared
    │   └── ui
    ├── components.json
    ├── constants
    │   └── index.ts
    ├── lib
    │   ├── actions
    │   ├── database
    │   └── utils.ts
    ├── middleware.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── assets
    │   ├── favicon.ico
    │   ├── logo-icon.png
    │   ├── logo.png
    │   ├── next.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── index.d.ts
```

---

## Modules

<details closed><summary>.</summary>

| File                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [middleware.ts](middleware.ts)           | Implements authentication middleware for specified public routes. Configures route matching rules for the repositorys routes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [postcss.config.mjs](postcss.config.mjs) | Enables tailwindcss PostCSS plugin in the parent repository for consistent styling across components.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [next.config.mjs](next.config.mjs)       | Defines remote image patterns for the Next.js app, specifying Cloudinary as a trusted source for external images.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [tailwind.config.ts](tailwind.config.ts) | Defines Tailwind CSS theme with custom colors, fonts, animations, and responsive container settings. Extends base Tailwind configuration for project styles. Tailors global design tokens for consistent UI across components and pages. Integrates Tailwind CSS plugin for additional animation utilities.                                                                                                                                                                                                                                                                                               |
| [package-lock.json](package-lock.json)   | The code file in this repository, located in the `app/api` directory, contains the implementation for handling API requests and responses. It serves as a crucial component for managing the communication between the frontend and backend of the application. By defining the endpoints and data structures used for exchanging information, this code helps ensure seamless interaction between different parts of the system. Its functionality is essential for enabling the application to retrieve and update data from external sources, enhancing the overall user experience and functionality. |
| [package.json](package.json)             | Defines the essential project configuration settings and dependencies to run a Next.js app for a photo-editing AI application. Manages scripts for development, building, starting, and linting, alongside various third-party libraries essential for app functionality.                                                                                                                                                                                                                                                                                                                                 |
| [components.json](components.json)       | Defines component configurations for styling and utility aliases. Specifies Tailwind setup, CSS variables, and component paths for improved code cleanliness and organization in the repository.                                                                                                                                                                                                                                                                                                                                                                                                          |
| [tsconfig.json](tsconfig.json)           | Enables TypeScript configuration for Next.js project. Defines compiler options, module settings, and plugin usage. Utilizes paths for module resolution and includes/excludes specific files. Maintains strict type-checking while supporting JSX and ESNext features for seamless development experience within the repository architecture.                                                                                                                                                                                                                                                             |

</details>

<details closed><summary>types</summary>

| File                           | Summary                                                                                                                                                                                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.d.ts](types/index.d.ts) | Defines various types like CreateUserParams, UpdateUserParams for user data and AddImageParams, UpdateImageParams for image data. Also includes types for CheckoutTransactionParams, CreateTransactionParams for transaction details and URL query parameters. |

</details>

<details closed><summary>app</summary>

| File                           | Summary                                                                                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](app/layout.tsx)   | Defines IBM Plex Sans font style, sets metadata for the app, and wraps children components within a ClerkProvider for theming.                                                                                                                    |
| [globals.css](app/globals.css) | Defines global styling variables and Tailwind utility classes for a web application, including color schemes, layout styles, and typography. Enhances consistency and flexibility across components and pages, ensuring a cohesive design system. |

</details>

<details closed><summary>app.(root)</summary>

| File                                  | Summary                                                                                                                                                                                                                                               |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](<app/(root)/layout.tsx>) | Defines the main layout structure incorporating sidebar, navigation, and content sections. Renders the children elements within a wrapper component and includes a toaster for notifications. Key components for the repositorys visual architecture. |
| [page.tsx](<app/(root)/page.tsx>)     | Renders a homepage with dynamic image content fetched async, based on search query and page number. Displays navigation links with icons. Integrated with a search feature and image collection component.                                            |

</details>

<details closed><summary>app.(root).transformations.update</summary>

| File                                                     | Summary                                                                                                                                                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [page.tsx](<app/(root)/transformations/update/page.tsx>) | Enables updating transformation page UI. Component exported as default to render page content. Key functionality focuses on managing transformation updates within the apps directory structure. |

</details>

<details closed><summary>app.(root).transformations.add.[type]</summary>

| File                                                         | Summary                                                                                                                                                                             |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<app/(root)/transformations/add/[type]/page.tsx>) | Enables adding transformation types with user authentication and redirect handling. Renders Header and TransformationForm components with user details for credit balance tracking. |

</details>

<details closed><summary>app.(root).transformations.[id]</summary>

| File                                                   | Summary                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<app/(root)/transformations/[id]/page.tsx>) | Displays image details, transformation type, and related information. Conditionally renders prompts, colors, and aspect ratios. Shows original and transformed images with download options. Allows updating/deleting images by the author only. Resides in the repository under app/(root)/transformations/[id]/page.tsx. |

</details>

<details closed><summary>app.(root).transformations.[id].update</summary>

| File                                                          | Summary                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<app/(root)/transformations/[id]/update/page.tsx>) | Enables user to update image transformations. Validates user authentication, fetches user and image details, then displays transformation form based on image type. Mainly resides in app/(root)/transformations/[id]/update/page.tsx in the parent repositorys architecture. |

</details>

<details closed><summary>app.(root).profile</summary>

| File                                      | Summary                                                                                                                                                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<app/(root)/profile/page.tsx>) | Implements user profile page rendering with authentication and user data retrieval using Clerk and custom actions. Displays users credit balance and image manipulation count. Renders a collection of user images with pagination support. |

</details>

<details closed><summary>app.(root).credits</summary>

| File                                      | Summary                                                                                                                                                                                                                                 |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<app/(root)/credits/page.tsx>) | Enables users to buy credits in exchange for different plans, showcasing features, prices, and inclusions. Validates user authentication and redirects if needed. Initiates checkout process for selected plan with Stripe integration. |

</details>

<details closed><summary>app.api.webhooks.clerk</summary>

| File                                        | Summary                                                                                                                                                                                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](app/api/webhooks/clerk/route.ts) | Handles Clerk webhooks to create, update, or delete users based on received events. Verifies event payloads, processes user data, and interacts with the Clerk API to update user metadata. Offers error handling and logs event details for monitoring. |

</details>

<details closed><summary>app.api.webhooks.stripe</summary>

| File                                         | Summary                                                                                                                                                                                                                                         |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](app/api/webhooks/stripe/route.ts) | Handles incoming Stripe webhook events, constructing and processing the event data to create transactions. Parses relevant information such as payment details and user metadata, then creates transactions and returns a response accordingly. |

</details>

<details closed><summary>app.(auth)</summary>

| File                                  | Summary                                                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](<app/(auth)/layout.tsx>) | Defines layout for authentication pages, wrapping child components. Maintains clean separation of concerns in the repositorys app architecture. |

</details>

<details closed><summary>app.(auth).sign-up.[[...sign-up]]</summary>

| File                                                     | Summary                                                                                                                                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [page.tsx](<app/(auth)/sign-up/[[...sign-up]]/page.tsx>) | Enables user sign-up using Clerk in the (auth) section. Directly imports SignUp component from @clerk/nextjs for seamless integration within the repository's authentication architecture. |

</details>

<details closed><summary>app.(auth).sign-in.[[...sign-in]]</summary>

| File                                                     | Summary                                                                                                                                                       |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<app/(auth)/sign-in/[[...sign-in]]/page.tsx>) | Enables user authentication for the application using the @clerk/nextjs library. The SignIn component is rendered to facilitate user sign-in functionalities. |

</details>

<details closed><summary>constants</summary>

| File                           | Summary                                                                                                                                                                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.ts](constants/index.ts) | Defines navigation links, bottom links, plans, transformation types, aspect ratio options, default values, and credit fee for a web service. Organizes key constants for user interfaces and pricing in the repositorys constants module. |

</details>

<details closed><summary>components.ui</summary>

| File                                               | Summary                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alert-dialog.tsx](components/ui/alert-dialog.tsx) | Enables custom dialog components with flexible styling in the repositorys UI module. Handles dialog triggers, content layout, title, description, actions, and styling variations for user interactions.                                                                                             |
| [pagination.tsx](components/ui/pagination.tsx)     | Defines reusable pagination components with semantic markup and accessible navigation for web interfaces. Includes pagination container, items, links, previous/next controls, and ellipsis indicator, enhancing user experience in navigating content efficiently.                                  |
| [toaster.tsx](components/ui/toaster.tsx)           | Enables rendering dynamic toasts with titles, descriptions, and actions. Utilizes `useToast` to manage toast state. Integrates with ToastProvider, ToastClose, ToastTitle, ToastDescription, ToastViewport components for a seamless user experience within the UI layer.                            |
| [sheet.tsx](components/ui/sheet.tsx)               | Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetOverlay, and SheetPortal. Manages sheet variants styles and animations, enhancing user experience through flexible and customizable sheet display options for the application interface. |
| [label.tsx](components/ui/label.tsx)               | Implements label styling using @radix-ui/react-label for consistent UI across the app. Utilizes class-variance-authority for variant management and React for component handling. Enhances accessibility and visual presentation.                                                                    |
| [use-toast.ts](components/ui/use-toast.ts)         | Enables interactive toasting functionality for the UI components. Manages toast state, actions, and interactions. Integrates with React components to display, update, and dismiss toasts based on user interactions.                                                                                |
| [button.tsx](components/ui/button.tsx)             | Implements a flexible Button component with variant styles for various button types and sizes. Utilizes class-variance-authority for styling control. Allows rendering as a button element or child slot. Central to UI consistency within the repositorys frontend architecture.                    |
| [toast.tsx](components/ui/toast.tsx)               | Defines and configures toast components for a user-friendly notification system within the app UI. Includes toast rendering, actions, close buttons, titles, and descriptions.                                                                                                                       |
| [select.tsx](components/ui/select.tsx)             | Enables custom styling and functionality for select components within the UI, enhancing user experience and visual appeal. Wrapper components handle triggers, content layout, item selection, separators, and scroll buttons.                                                                       |
| [input.tsx](components/ui/input.tsx)               | Improve the user interface by creating a reusable Input component that accepts various attributes. This component enhances the overall look and functionality of forms across the application.                                                                                                       |
| [form.tsx](components/ui/form.tsx)                 | Enables structured form creation with labels, controls, descriptions, and error messages. Facilitates seamless form management and user interaction within the parent repositorys UI components.                                                                                                     |

</details>

<details closed><summary>components.shared</summary>

| File                                                                           | Summary                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [InsufficientCreditsModal.tsx](components/shared/InsufficientCreditsModal.tsx) | Implements credit check modal with Next.js navigation, alerts for low credits, and options to redirect users to profile or credit purchase page. Enhances user experience and facilitates seamless navigation within the app.                                                        |
| [Search.tsx](components/shared/Search.tsx)                                     | Implements dynamic search functionality that updates the URL query parameters in sync with user input. Handles debouncing to prevent excessive URL updates. Utilizes Next.js image component and custom input component for UI.                                                      |
| [Checkout.tsx](components/shared/Checkout.tsx)                                 | Implements checkout functionality using Stripe for processing transactions. Dynamically loads the Stripe library and handles success/cancel notifications. Allows users to buy credits, triggering a credit checkout process.                                                        |
| [MediaUploader.tsx](components/shared/MediaUploader.tsx)                       | Enables cloud image uploading with customizable success and error notifications. Dynamically displays uploaded images and offers user-friendly image upload functionality. Integrates cloudinary services for enhanced media handling in the application.                            |
| [DeleteConfirmation.tsx](components/shared/DeleteConfirmation.tsx)             | Enables deletion confirmation for images using transitions and an alert dialog. Deletes the image upon confirmation, providing a seamless user experience.                                                                                                                           |
| [SideBarElement.tsx](components/shared/SideBarElement.tsx)                     | Illustrates a dynamic sidebar element for navigation in the app. Determines active status based on current route. Renders labeled icons with interactivity and styling based on active state. Contributing to frontend UI for seamless user navigation.                              |
| [MobileNav.tsx](components/shared/MobileNav.tsx)                               | Enables dynamic navigation rendering based on user authentication status. Utilizes Clerk for authentication handling, Next.js for routing, and Tailwind CSS for styling. Facilitates seamless user experience with mobile-responsive design.                                         |
| [Test.tsx](components/shared/Test.tsx)                                         | Defines a reusable Test component for the UI, contributing to the shared components in the app section. Displays a simple Test headline when rendered.                                                                                                                               |
| [Header.tsx](components/shared/Header.tsx)                                     | Defines a reusable header component for rendering titles and optional subtitles with customizable styles. Promotes consistent UI across the application by encapsulating header presentation logic.                                                                                  |
| [Sidebar.tsx](components/shared/Sidebar.tsx)                                   | Generates a dynamic sidebar with navigation elements and user authentication options. Renders different links based on the users sign-in status. Adapts the sidebar content to display relevant links for signed-in and signed-out users within the parent repositorys UI framework. |
| [TransformationForm.tsx](components/shared/TransformationForm.tsx)             | Enables users to create or update image transformations with a customizable form. Handles submission, image selection, transformation configuration, and credit management. Supports various transformation types based on user input.                                               |
| [TransformedImage.tsx](components/shared/TransformedImage.tsx)                 | Facilitates seamless image transformation rendering and downloading based on Cloudinary configurations. Handles image loading states and user-friendly interactions.                                                                                                                 |
| [CustomField.tsx](components/shared/CustomField.tsx)                           | Facilitates custom form field rendering by integrating React Hook Form control with Zod schema validation. Enhances form input display with customizable labels and messages within a consistent UI structure. Smoothly integrates with TransformationForm schema.                   |
| [Collection.tsx](components/shared/Collection.tsx)                             | Enables rendering of image collections with pagination and search. Displays recent edits, allows navigation between pages, and presents transformation icons. Supports dynamic URL updates for smoother user experience.                                                             |

</details>

<details closed><summary>lib</summary>

| File                     | Summary                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [utils.ts](lib/utils.ts) | Combines class values, handles errors, generates placeholder loader, modifies URL query params, removes query keys, debounces functions, gets image size, downloads images, and deeply merges objects. |

</details>

<details closed><summary>lib.database</summary>

| File                                    | Summary                                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mongoose.ts](lib/database/mongoose.ts) | Manages MongoDB connections with caching for efficient data access, ensuring the availability and integrity of database operations for the application. |

</details>

<details closed><summary>lib.database.models</summary>

| File                                                             | Summary                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [user.model.ts](lib/database/models/user.model.ts)               | Defines user model schema with essential fields for database. Ensures uniqueness for clerkId, email, and username. Sets defaults for planId and creditBalance. Implements User model using Mongoose for data manipulation in the applications database.                           |
| [transaction.model.ts](lib/database/models/transaction.model.ts) | Defines a Mongoose model for transactions in the database, handling creation timestamps, unique identifiers, payment amounts, user credits, subscription plans, and buyer associations. Encapsulates the transaction schema and maps it to a Mongoose model for data persistence. |
| [image.model.ts](lib/database/models/image.model.ts)             | Defines database schema for images in Mongoose, ensuring structured data storage. Includes fields for title, image details, author information, and timestamps. Supports data retrieval and manipulation for image-related functionality in the project.                          |

</details>

<details closed><summary>lib.actions</summary>

| File                                                         | Summary                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [transaction.actions.ts](lib/actions/transaction.actions.ts) | Implements transaction actions for processing credit checkout and creating transactions in the repositorys backend. Handles Stripe payment integration, database operations, and error handling. Interacts with user actions to update credits accordingly. |
| [image.actions.ts](lib/actions/image.actions.ts)             | Implements actions to manage images in the app, such as adding, updating, deleting, and retrieving images. Utilizes cloud services for storage and integrates with the database to perform CRUD operations securely.                                        |
| [user.actions.ts](lib/actions/user.actions.ts)               | Manages user CRUD operations and credit updates, ensuring database connectivity and error handling in the parent repositorys server-side logic.                                                                                                             |

</details>

---

## Getting Started

**System Requirements:**

- **TypeScript**: `version x.y.z`

### Installation

<h4>From <code>source</code></h4>

> 1. Clone the . repository:
>
> ```console
> $ git clone ../.
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd .
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

### Usage

<h4>From <code>source</code></h4>

> Run . using the command below:
>
> ```console
> $ npm run dev
> ```
