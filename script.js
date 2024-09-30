document.getElementById('showContentBtn').addEventListener('click', function() 
{
    var content = document.getElementById('content');
    if (content.style.display === 'none') 
        {
        content.style.display = 'block';
    } 
    else 
    {
        content.style.display = 'none';
    }
});
