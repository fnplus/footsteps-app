noContent = footsteps => {
  let valid = false

  for (var i = 0; i < footsteps.length; i++) {
    if (Object.keys(footsteps[i]).length <= 1) {
      valid = true
    }
  }

  return valid
}

emptyContent = footsteps => {
  let valid = false

  for (var i = 0; i < footsteps.length; i++) {
    let footstep = footsteps[i]

    for (var key in footstep) {
      if (key !== "description") {
        if (footstep[key] === "") {
          valid = true
        }
      }
    }
  }

  return valid
}

validatePathDetails = footsteps => {
  let footstep = footsteps
  let err_msg
  if (
    footstep.title === "" ||
    footstep.description === "" ||
    footstep.icon_url === "" ||
    footstep.tags === ""
  ) {
    err_msg = "Please fill the path details"
    return false
  } else if (footstep.footsteps.length < 1) {
    err_msg = "Please add a few footsteps. Footsteps can not be empty."
    return false
  } else if (this.noContent(footstep)) {
    err_msg = "Please fill the footstep content"
    return false
  } else if (this.emptyContent(footstep)) {
    err_msg = "Please fill all the footstep fields"
    return false
  } else {
    err_msg = ""
    return true
  }
}

export { validatePathDetails, err_msg }
