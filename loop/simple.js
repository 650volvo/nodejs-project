function loadItem(id, cb) {
    setTimeout(function () {
        cb(null, { id: id });
}, 500); }
// functions to manage loading 
var loadedItems = [];
function itemsLoaded() {
    console.log('Do something with:', loadedItems);
}
function itemLoaded(err, item) {
    loadedItems.push(item);
    console.log(item);
    if (loadedItems.length == 1) {
            itemsLoaded();
} }
// calls to load
loadItem(1, itemLoaded);