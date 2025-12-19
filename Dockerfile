# Node version 
FROM node

# Create app directory inside container
WORKDIR /cicd-app

# Copy app files into container
copy . .

# Install app dependencies
RUN npm install

# Expose port 3000
EXPOSE 5173

# Start the app
CMD ["npm", "run","dev"]
