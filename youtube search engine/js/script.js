//searchbar handlar
$(document).ready(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');   

    //Focus Event Handler
    $(searchField).on('focus',function(){
        $(this).animate({
            width:'100%'
        },400);
        $(icon).animate({
            right: '10px'

        },400);
    });
    //blur event handler
    $(searchField).on('blur' , function(){
        if(searchField.val() == ''){
            $(searchField).animate({
                width:'45%'
            },400,function(){});
            $(icon).animate({
                right: '360px'
            },400,function(){});
        }
    });

})

function search() {
     //Clear Results
     $('#results').html('');
     $('#buttons').html('');

     //Get Form Input 
     q = $('#query').val();

     //Run Get Request on Api 
     $.get (
         "https://www.googleapis.com/youtube/v3/search",{
             part:'snippet, id',
             q: q,
             type: 'video',
             key: 'AIzaSyALaaAdUhJKIe98QokMYQubDPDBPT9CCRc'},
         function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            console.log(data);

            $.each(data.item,function(i, item){
                var output = getOutput(item);

                //siaplay results  
                $('#results').append(output);

            });

         }
     )

}
//build output
function getoutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.title.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitl = item.snippet.channelTitl;
    var videoDate = item.snippet.publishedAt;

    //build 
    var output = '<li>'+
    
    '<div class="list-left">'+
    '<img src="'+thumb+'">'+
    '</div>'+
    '<div class="list-right">'+
    '<h3>'+title+'</h3'+
    '<small>By <span class="ctitle">'+channelTitle+'</span> on '+videoDate+'</small>'+
    '<p>'+datadescription+'</p>'+
    '</div>' +
    '</li>' +
    '<div class="clearfix"></div>'+'';

    return output;
}