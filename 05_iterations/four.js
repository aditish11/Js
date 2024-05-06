const myObj={
    js:"javaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift"
}

//for objects, we can use for in loop
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key])
}

// Maps are not iterable through for in loop
