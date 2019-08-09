#!/bin/bash

API="http://localhost:4741"
URL_PATH="/answers"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "answer": {
      "yes": "'"${YES}"'",
      "no": "'"${NO}"'",
      "survey": "'"${SURVEY}"'"
    }
  }'

echo
