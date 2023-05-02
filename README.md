# Social Medial App
Full Api Documentation: https://documenter.getpostman.com/view/24252019/2s93eU2uLW

### Register user
```
POST /api/register
```
- To register a User
- If successful it returns "User Registered"
- with Status code 201

### Get users
```
GET api/users
```
- If successful it returns all the registered users.

### Get Friends
```
GET api/users/:id/friends
```
- Requires user id in params
- If successful it returns all the friends of a user.

### Send Friend request
```
POST api/users/:id/friends
```
- Requires user id in params
- If successful it sends the request to friend by id in parmas.


### Accept or reject friend requests
```
PATCH api/users/:id/friends/:friendId
```
- Requires user id in params and friendid
- If successfun it accepts or rejects the request

### Get posts
```
GET api/posts
```
- Returns all the posts

### Create Post
```
POST api/posts
```
- Creates a post

### Upadate a Post
``` 
PATCH api/posts/:id
```
- Updates the post


### Delete a Post
``` 
DELETE api/posts/:id
```
- Deletes the Post


### Like a Post
``` 
POST api/posts/:id/like
```
- Likes the post


### Comment on a Post
``` 
POST api/posts/:id/comment
```
- Adds the comment to the post

### Get post details
``` 
GET api/posts/:id
```
- returns the Post details

