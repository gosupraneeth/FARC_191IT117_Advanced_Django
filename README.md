# FARC_191IT117_Advanced_Django
FARC WebDev Recruitment Task - 2021

## Installation 
Clone the git repo to your system using the below command
````
git clone https://github.com/gosupraneeth/FARC_191IT117_Advanced_Django.git
````
Or download the zip file by clicking on the code download green button.

## Run the code
To start the application, move to the FARC folder and run the below command.
````
python manage.py runserver
````
>Note: Ensure that you are in the folder with manage.py file before running the above command.

After running the above command, open the [http://127.0.0.1:8000/](http://127.0.0.1:8000/) or [http://localhost:8000/](http://localhost:8000/) to view the application.

## Features
### Implemented
- The application is in a complete MVC format.
- The user can signup and sign in to his account.
- The home page contains a few details about the NITK campus, which is an additional feature for this task.
- It also has the carousel, which slides some images. We can consider it as a gallery.
- User can see the timetable only if the user logs into his account.
- There are two kinds of users one is CR, and the others are ordinary students.
- Only CR can see the edit option to edit the timetable others can only view the timetable.
- Who is CR? It can decide by the application admin where the admin can go to the Django administration and ticks the checkbox is_cr in the CR candidate user details.
- The admin can be a class teacher, faculty advisor, or prominent application leader (like Iris handler).
- Now that CR can click on the edit button to edit the timetable.
  - CR can see the same table after clicking the edit button, but he can drag and drop the slot tabs in the cells to change the timetable.
  - When the CR enters the course name and number of credits in the below input boxes and press enter, he can see the draggable slot tabs beside the table to place them in the table cells.
  - The CR can also delete the slot tabs by dragging them onto the trash bin at the bottom of the page.
  - In this way, CR can edit the timetable and clicks the save button to save it.
- Now, every user can view the changed timetable.
- Drag and Drop options make the user more user-friendly.
- The application is responsive. Users can view it from any device without any problem.

### Not Implemented or Future Work
- At present, the timetable is fixed with 5x8 slots, making it dynamic by giving the options like increasing or decreasing the rows or columns size is the future work left.

>Used Boostrap and Google fonts for better decoration.

## Screenshots
- The home page of the application looks like this<br/><br/>
>![ss1](https://user-images.githubusercontent.com/59569250/121029897-9e680000-c7c6-11eb-9ce1-c1ca4d97edba.png)
>Note: You can see the timetable option in navbar after signin.

- The timetable looks like this
>![SS2](https://user-images.githubusercontent.com/59569250/121030892-83e25680-c7c7-11eb-8e23-d23aae2521a2.png)

