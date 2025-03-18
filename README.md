# MSR - Movies and Series Rate

## Steps to run the project

1. Install the docker on your machine: [Install docker](https://docs.docker.com/desktop/)

2. Clone this project on your local repository: 
```bash
git clone https://github.com/KelsonTeixeira/MSR.git 
```

3. Inside of the cloned repository install the dependencies by running: 
```bash
npm --prefix ./api i
````
4. Run docker compose by running:
```bash
docker compose up -d
```

5. Init the database by running: 
```bash
npm --prefix ./api run init:db
```
6. Run api on port 3001 by running:
```bash
npm --prefix ./api run start
```
7. You can import the request in insomnia or post in the folder requests you will find the files.



