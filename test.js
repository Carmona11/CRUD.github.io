// how to crud?

function delete_row(no)
{

    document.getElementById("row"+no+"").outerHTML="";
}


function add_row(){   
     var new_image=document.getElementById("new_image").value;
     var new_title=document.getElementById("new_title").value;
     var new_description=document.getElementById("new_description").value;
        if (new_image&&new_title&&new_description != "") {
            var table=document.getElementById("data_table");
            var table_len=(table.rows.length)-1;
            var row = table.insertRow(table_len).outerHTML=
            "<div class='myrow'><div id='row"+table_len+"'><img id='image_row"+table_len+"' src = "+new_image+"><div id='title_row"+table_len+"' class='titleData'>"+new_title+
            "</div><div class='descData' id='description_row"+table_len+"'>"+new_description+"</div><div><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'><input type='button' value='Edit' class='edit' onclick='edit_row("+table_len+",this)'></div></div></div>";

            document.getElementById("new_image").value="";
            document.getElementById("new_title").value="";
            document.getElementById("new_description").value="";
    }
}

function edit_row(no,ref){
      ref.value="Save";
      ref.removeAttribute("onclick");
      
      
      var image=document.getElementById("image_row"+no).getAttribute("src");
      console.log(image);
      var title=document.getElementById("title_row"+no);
      console.log(title);
      var description=document.getElementById("description_row"+no);
      console.log(description);

      var image_data = image; // remove image.innerHTML
      var title_data = title.innerHTML;
      var description_data =description.innerHTML;
      document.getElementById("new_image").value=image_data;
      document.getElementById("new_title").value=title_data;
      document.getElementById("new_description").value=description_data;
      
      ref.setAttribute("onclick","saveEdit(this,'"+no+"')");
}

function saveEdit(ref,no)
{
 var new_image=document.getElementById("new_image").value;
     var new_title=document.getElementById("new_title").value;
     var new_description=document.getElementById("new_description").value;
     
     var parent= (ref.parentElement).parentElement;
     var img=parent.firstChild.setAttribute("src",new_image);
     var list = document.getElementById(parent.id);
     var title=list.getElementsByClassName("titleData")[0];
     var desc=list.getElementsByClassName("descData")[0];
     
     title.innerHTML=new_title;
     desc.innerHTML=new_description;
     
           ref.value="Edit";
      ref.removeAttribute("onclick");
       ref.setAttribute("onclick","edit_row("+no+",this)");
   
    document.getElementById("new_image").value="";
            document.getElementById("new_title").value="";
            document.getElementById("new_description").value="";
}

<div id="wrapper">
    <h1 align="center">My Todo App</h1>
    <div id="container">
        <form id="myForm">
            <table align='center' cellspacing=2 cellpadding=5>
            <tr>
                <th>Image Link</th>
                <th>Title</th>
                <th>Description</th>
            </tr>
            <tr>
                <td><input type="text" id="new_image"></td> 
                <td><input type="text" id="new_title"></td>
                <td><input type="text" id="new_description"></td>
                <td><input type="button" class="add" onclick="add_row();" value="SAVE"></td>
            </tr>
        </table>
        </form>
    </div>

    <div id="content_container">
        <div>
            <table align='center' cellspacing=2 cellpadding=5 id="data_table">

        </table>
        </div>
    </div>
</div>


