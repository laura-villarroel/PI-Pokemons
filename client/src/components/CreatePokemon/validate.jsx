export const validate = (input) =>{
    let errors = {};

  if (!input.name) {
    errors.name = "A name is required";
  } else if (!/^[a-zA-Z]+$/.test(input.name) || input.name.length > 10) {
    errors.name = "Name is invalid";
  }

  if (!input.height) {
    errors.height = "Height is required";
  } else if (input.height > 200) {
    errors.height = "Height is invalid";
  }

  if (!input.weight) {
    errors.weight = "Weight is required";
  } else if (input.weight > 10000) {
    errors.weight = "Weight is invalid";
  }

  if (!input.img) {
    errors.img = "an img url is required";
  } else if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(input.img)
) {errors.img = "url is invalid";}

  return errors;
}