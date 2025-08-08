# Base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy your app files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Download NLTK data (if used)
RUN python -m nltk.downloader vader_lexicon

# Set environment variable for Flask
ENV FLASK_APP=sentiment_analyzer.py

# Expose port Flask will run on
EXPOSE 5000

# Run Flask
CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0" ]
