const API = "https://api.themoviedb.org/3";

export  default  function  get(path){
    return  fetch(API + path,{
        headers: {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM2NDgyYTA0NjJhZTk1MzY2MzczZDQyYWZlMDg5ZSIsIm5iZiI6MTczMTQ3NTY4MC4zNDIxOCwic3ViIjoiNjczNDM3NjlhNjdlMzZiYjY2OGQ4NzM2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.anzF744wipki7_4-DaBNPUMOuL4MMxIuA9P4WRefPcs",
            "Content-Type": "application/json"
            
        }
    }).then((response) => response.json());
};