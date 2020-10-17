const general_info_map =  new Map([
    ['Online: ' , navigator.onLine],
    ['Languages: ' , navigator.languages],
    ['Language: ' , navigator.language],

    // Specific to Internet Explorer and Microsoft Edge.
    // ['Ms Manipulation views enabled: ', navigator.msManipulationViewsEnabled],
    // ['Ms Max touuch points: ' , navigator.msMaxTouchPoints],
    // ['Ms Pointer enabled: ', navigator.msPointerEnabled],
    
    // In late 2013, 
    // pointerEnabled was removed from the specification as checking PointerEvent in
    // Window object is sufficient for feature detection. 
    // Do not use this property and use PointerEvent instead.
    // ['Pointer enabled: ' , navigator.pointerEnabled],
]);

const browser_info_map = new Map([
    ['App name: ' , navigator.appName],
    ['App code name: ' , navigator.appCodeName],
    ['App version: ' , navigator.appVersion],
    ['Platform: ' , navigator.platform],
    ['Web driver: ' , navigator.webdriver],
    ['Is cookies enabled: ' , navigator.cookieEnabled],
    ['Do not track: ' , navigator.doNotTrack],
]);

const device_info_map = new Map([
    ['Operating system: ', navigator.oscpu],
    ['Max touch points: ' , navigator.maxTouchPoints],
    ['Media devices: ' , navigator.mediaDevices],
    ['Device memory: ' , `This device has at least ${navigator.deviceMemory}GiB of RAM.`],
    ['Hardware concurrency: ' , `${navigator.hardwareConcurrency} logical processors available to run threads on the device.}`]
]);

const mimeTypes = navigator.mimeTypes;
const mime_info_map = new Map();
const mimeLenth = mimeTypes.length;

mime_info_map.set('Count: ', `${mimeLenth}`);

for(var i = 0; i < mimeLenth; i++)
{
    mime_info_map.set(`Mime ${i + 1}:`, mimeTypes[i]);
};

const other_info_map = new Map([
    ['Clipboard: ' , navigator.clipboard],
    ['Credentials: ' , navigator.credentials],
    ['Geolocation: ' , navigator.geolocation],
    ['Permissions: ' , navigator.permissions],
    ['Product: ' , navigator.product],
    ['Product sub: ' , navigator.productSub],
    ['Service worker: ' , navigator.serviceWorker],
    ['Storage: ' , navigator.storage],
    ['Vendor: ' , navigator.vendor],
    ['Vendor sub: ' , navigator.vendorSub],

    ['User agent: ' , navigator.userAgent],
]);

function create_info_section(content_title, content_data_map, parent_element)
{
    let list_items = [];

    for (let [key, value] of content_data_map.entries()) 
    {
        list_items += `<li>${key + value}</li>`;
    }

    console.log(list_items.length)

    let new_section = 
    `<section>
    <div class="flexbox-container">
    <div class="flexbox-item"> 
    <h1 class="flexbox-title">
                    <strong>${content_title}</strong>
                </h1>
                    <div class="flexbox-content">
                    ${list_items}
                    </div>
                </div>
            </div> 
    </section>`

    parent_element.innerHTML += new_section;
}

const section_element = document.querySelector('.sections');

create_info_section("GENERAL", general_info_map, section_element);
create_info_section("BROWSER", browser_info_map, section_element);
create_info_section("DEVICE", device_info_map, section_element);
create_info_section("MIMES", mime_info_map, section_element);
create_info_section("OTHERS", other_info_map, section_element);

const geolocation = navigator.geolocation;

geolocation.getCurrentPosition(
(position) => 
{
    const coordinates = position.coords;
    
    console.log('Your current position is: ');
    console.log(`Latitude: ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.latitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
}, 
(error) =>
{
    console.error(`ERROR (${error.code}): ${error.message}`);
}, 
{ 
    eableHighAccurac: true, timeout: 5000, maximumAge: 0
});