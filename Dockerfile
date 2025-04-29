FROM python:3.9-slim-buster

USER root

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Create a system group and a non-root system user
RUN addgroup --system appuser \
 && adduser  --system --ingroup appuser appuser

# Switch to this user for execution
USER appuser

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
