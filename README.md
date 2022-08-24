
## HTML Elements 
- Header(title, logout button) ()
- form (text input for item, number input for quantity, add item button) ()
- div for list ()
- ul for all list items (generated dynamically with render function) ()
- delete list button ()

## State
- empty items array ()

## Data
- items table in supabase (x)
- item (varchar) (not nullable) (x)
  quantity (int8) (nullable) (x)
  bought (boolean) default false (nullable) (x)
  user_id (uuid) linked to users table id column (x)

## Fetch utils
- checkAuth (x)
- signInUser, signUpUser (x)
- createItem (x)
- getItems (x)
- itemBought (x)
- deleteAllItems (x)

## Authentication
- Users can only see their own list
- Users can only update the data to their own user_id

## User Events
- on form submit, new item row is added to supabase
- on form submit, displayItems function will getItems and display all items in DOM
- on click of item itemBought is called and updates row and displays that item is bought
- on click og delete button deleteAllItems is called and list is deleted from supabase and DOM

# Plan
- Hardcode header and logout button 
- Hardcode containers and form in HTML

- create supabase table
- link supabase

- write renderItem function in render-utils
- write displayItems function in app.js. getItems from supabase and loop through and   render each item and append and display
- write form event listener and call createItem inside. 
- write itemBought function in fetch-utils that updates bought from false to true
- in render item write a conditional that adds different class based on whether bought is true or false
- call displayItems on load

