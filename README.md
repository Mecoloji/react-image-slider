
## Demo

### See the site here: https://mecoloji.github.io/react-image-slider/


# Creating Data File

- Firstly, we have created our application, in this we just don’t need to touch index.js as always because we always work with components. Then after we have first created our `sliderData.js` file in which we will store our images, and it will be usable by just calling it. We have here added 5 images in the array, we used images from online platform, so we have to give links for these images, and alternatively we need an internet connection each time to run this application properly. You can also add images directly to the application and just give its path.

# Adding Images to The Application

- Now, we need to add our `ImageSlider.js` component, in which we will write our main logic. Before that, we need to install react-icons package, For that we need to add command `npm install react-icons` in our console because we need this to add our icons for next and previous button. Now in ImageSlider component, we have added our React, useState packages, also we have imported our `SliderData.js` to access the images, And lastly we have added our `FaArrowAltCircleRight, FaArrowAltCircleLeft` icons from react-icons.

- Now let’s add the section for our images and icons, we have added our both icons here, with class names, and we also added event listener on these icons for onClick event. In this event, we have called functions, one prevSlide function and other for nextSlide function. For these functions, we have added our state hook, in which we have added 0 as our default value, and we can update these when the icons get clicked.

- Here, in nextSlide function, we are checking `current === length - 1 ? 0 : current + 1` this condition, so when the current slide index is equals to length-1 (which is here 4). If yes then we just simply move to 0 otherwise we will increment the number.

``` 
Note: Here we are accessing the image with its index number, as we have added these images as an array inside the SliderData.js file. And we also know that, array indexes starts from 0, so we have added number of images into the length variable. here length will be 5 and image indexes will be 0 to 4.
```

- Now For prevSlide we are checking `current === 0 ? length - 1 : current - 1` condition, where if it is true then we will add length-1 (which is 4) and if it is false then we will decrease the value of the index.

- Now we have added functionalities to these icons, let’s fetch the images. For that, we have used map() function to fetch the data. In this, we are adding some classes for slide and check if current is equals to index, and also we have added active class which we will customize in the CSS file. In this div we have fetched our images.

# Adding CSS Styling

- Since our result is quite big and not pretty good-looking, we need to adjust these using our `App.css` file.

- In the CSS file, we just have to adjust image size and customize these icons. Also, we have added a little bit of animations while changing the images. We also need to hide the other image so that output won’t be bad.
