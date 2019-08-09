#!/bin/bash

API="http://localhost:4741"
URL_PATH="/examples"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
