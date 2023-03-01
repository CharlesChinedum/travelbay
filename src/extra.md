# {

# me {

# id

# firstName

# lastName

# firstName

# email

# phoneNumber

# createdAt

# }

# }

# mutation {

# register(firstName: "Leo", lastName: "Ugbor", email: "charleschinedum2@gmail.com", password: "password123", phoneNumber:"09060423952") {

# }

# }

# mutation {

# register(firstName: "Leo", lastName: "Ugbor", email: "charleschinedum2@gmail.com", password: "password123", phoneNumber:"09060423952") {

# \_\_typename

# }

# }

# mutation register(

# $firstName: String!

# $lastName: String!

# $email: Email!

# $password: String!

# $phoneNumber:String!

# ) {

# register(

# firstName: $firstName

# lastName: $lastName

# email: $email

# password: $password

# phoneNumber: $phoneNumber

# ) {

# \_\_typename

# }

# }
