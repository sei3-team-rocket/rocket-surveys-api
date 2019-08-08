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
      "answerOne": "'"${ANS1}"'",
      "answerTwo": "'"${ANS2}"'",
      "owner": "'"${USER}"'",
      "survey": "'"${SURVEY}"'"
    }
  }'

echo
