FROM python:3.10-slim

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1 

RUN apt-get update && \
    apt-get install postgresql-contrib -y && \
    apt-get install libpq-dev -y && \
    apt-get install python3-psycopg2 -y && \
    apt-get install postgis -y

WORKDIR /app

# Install pip requirements
COPY ./backend/requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt


COPY ./backend/core .
