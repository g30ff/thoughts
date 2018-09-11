# project-4-thoughts
# Thoughts
An app to capture a thought and then manage or expand upon that thought.

The Thoughts App is a place where you can store your thoughts, expand on these thoughts, categorize them, search them, and so on.  A thought is in it's simplest form, a single piece of information.  

The app will be multi-user, meaning that the system can accomodate multiple user accounts.  Each user will have to initially register to create an account.  Going forward, they will have to log in to use the application.  Each users thought can only be viewed by the user that created them.

## User Stories
* As a user, I want to be able to register to create an account on the system.
* As a user, I want to be able to log in to the system to view my thoughts.
* As a user, I want my thoughts to be viewable only to me.
* As a user, I don't want to be able to see other users thoughts. 
* As a user, I want to be able to create a thought.
* As a user, I want to be able to edit a thought.
* As a user, I want to be able to delete a thought.
* As a user, I want to be able to categorize a thought.
* As a user, I want to be able to create a category.
* As a user, I want to be able to edit a category.
* As a user, I want to be able to delete a category.

## Tables in Database

![ERD](https://git.generalassemb.ly/gharnett/project-4-thoughts/blob/master/thoughs_ERD.png)

## Issues
I ran into an issue incorporating nested resources into the application.  Primarily with categories and thoughts.  I had defined and tested endpoints in the api to create a thought using the endpoint *category/category_id/thoughts* .  Everything seemed to be set up correctly, having a corresponding route defined, which had been tested.  The create task kept failing with a 500 error and a message stating a problem with the permit method in the thoughts controller.  The problem was `params.require(:thought)`.  The arguement `:thought` seemed to be problematic because one of the params was also `:thought`.  I tried to change the require param to something different, and as a result I got a 400 error.  I was recommended to remove the `.require(:thought)` piece entirely, and that worked.  I was able to create nested thoughts.

```ruby
## Before
private
    def thought_params
        params.require(:thought)
        .permit(:title, :thought, :active, :category_id)
    end


## After
private
    def thought_params
        params
        .permit(:title, :thought, :active, :category_id)
    end
```

This is the JavaScript Create Thought endpoint.
```javascript
function saveThought(thought) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(thought),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    return fetch(BASE_URL + `/categories/${thought.category_id}/thoughts`, opts)
    .then(resp => resp.json());
}
```