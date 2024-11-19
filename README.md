
---
# Check out the site at https://techrepair-experts.onrender.com/

# 📱 Repair Cost Estimator & YouTube Video Showcase Project

Check out the live site at [https://techrepair-experts.onrender.com/](https://techrepair-experts.onrender.com/)

## 🚀 Project Overview

This project consists of four main components:
1. **Repair Cost Estimator**: A tool for estimating repair costs based on device type, model, and the issue.
2. **YouTube Video Showcase**: A page that displays a gallery of YouTube videos from a specific channel, along with video details.
3. **GitHub Portfolio Showcase**: A page that displays a list of the available projects I have worked on.
4. **Additional Pages**:
   - **Contact**: Allows users to get in touch.
   - **About Us**: Provides information about the company or project.
   - **Services**: Details the services offered.
   - **Gallery**: A blog-like page showcasing images and articles

## 🚀 Features

### Repair Cost Estimator
- **Multi-Step Form**: Users can choose the device type, model, and the issue they are facing. The cost is fetched from a PostgreSQL database using Prisma.
- **Progress Bar**: Visually represents the user’s progress through the form.
- **Animations**: Smooth transitions between steps enhance user experience.
- **Dynamic Cost Calculation**: Real-time cost fetching from the backend based on user input.

### YouTube Video Showcase
- **YouTube API Integration**: Fetches videos from a specific YouTube channel.
- **Pagination**: Displays videos in a paginated format.
- **Video Details**: Clicking on a video shows more details such as the description and duration, and plays the video in an embedded player.
- **Search Functionality**: Users can search videos by title.
- **Responsive Layout**: Videos are displayed in a neat 3x4 grid layout on larger screens and adapt to mobile devices.

### Additional Pages

#### Contact
- **Contact Form**: Allows users to send messages or inquiries.
- **Map Integration**: Displays the company’s location via an embedded map.

#### About Us
- **Company Information**: Provides details about the mission, vision, and team members.
- **Timeline**: Showcases the project's or company's milestones.

#### Services
- **Service Listings**: Details of the services offered, including descriptions and pricing.
- **Service Categories**: Organizes services into categories for easier navigation.

#### Gallery
- **Blog-like Posts**: Displays images and articles related to tech repairs.
- **Image Slider**: Showcases featured images with descriptions.


## 🧩 Technologies Used

- **Frontend**:
  - React.js
  - Bootstrap
  - FontAwesome
  - Animate.css
- **Backend**:
  - Express.js
  - Prisma
  - PostgreSQL Database
- **APIs**:
  - YouTube API: To fetch video details and data.


## ⚙️ Setup Instructions

### Prerequisites

1. **Node.js** installed on your machine.
2. **PostgreSQL** installed and running locally or on a cloud database provider.
3. **YouTube API Key** from the [Google Developer Console](https://console.developers.google.com/).

### Installation


1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install Dependencies for Both Client and Server**:

    ```bash
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install
    ```

3. **Configure PostgreSQL and Set Up Prisma**:

    - **Initialize Prisma**:

      ```bash
      npx prisma init
      ```

    - **Set Up Your Prisma Schema**:

      Edit the `prisma/schema.prisma` file to define your data models. Ensure it includes models for the Repair Cost Estimator and any other necessary components.

    - **Run Prisma Migrations**:

      ```bash
      npx prisma migrate dev --name init
      ```

    - **Seed the Database with Repair Cost Data (If Applicable)**:

      ```bash
      npx prisma db seed
      ```

4. **Run the Server**:

    ```bash
    cd server
    npm start
    ```

5. **Run the Client**:

    ```bash
    cd client
    npm start
    ```

6. **Access the Frontend App**:

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
