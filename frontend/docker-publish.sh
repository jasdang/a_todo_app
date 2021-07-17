# Log in
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 884439622123.dkr.ecr.ap-southeast-1.amazonaws.com

# Create tag
tag=`git rev-parse --short HEAD`
docker tag frontend:latest 884439622123.dkr.ecr.ap-southeast-1.amazonaws.com/a_todo_app_frontend:git_"$tag"

# Push to ECR
docker push 884439622123.dkr.ecr.ap-southeast-1.amazonaws.com/a_todo_app_frontend:git_"$tag"