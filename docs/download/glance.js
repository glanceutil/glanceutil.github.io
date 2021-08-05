function toInteger(array) {
    var pval = parseInt(String.fromCharCode.apply(null, array));
    return (isNaN(pval) && 0) || pval;
}
function toString(array) {
    return String.fromCharCode.apply(null, array);
}

const packet_size = 4;

/*
    Example (return values)
    - packet = "0003ABC"
    - getLengthSize() = "0003"
    - getPacketLength() = 7
    - getPacketStruct() =
        {
            len  : "0003",
            data : "ABC"
        }
*/

/*
    Function    : getLengthSize
    Description : size of packet length
    Return      : string or number
*/
glance.getLengthSize = function()
{
    console.log("getLengthSize: ", 4);
    return packet_size;
}

/*
    Function    : getPacketLength
    Description : total length of packet (including length)
    Return      : string or number
    Arguments
        - packet : Uint8Array
        - issend : boolean
        - connid : string
*/
glance.getPacketLength = function(packet, issend, connid)
{
    console.log("BYTES_PER_ELEMENT:", packet.BYTES_PER_ELEMENT);
    console.log("issend", issend);
    console.log("connid", connid);

    var length = toInteger(packet.slice(0,packet_size)) + packet_size;
    console.log("return:", length);
    return length;
}

/*
    Function    : getPacketStruct
    Description : packet structure
    Return      : object
    Arguments
        - packet : Uint8Array
        - issend : boolean
        - connid : string
*/
glance.getPacketStruct = function(packet, issend)
{
    var len = toInteger(packet.slice(0, packet_size));
    var struct = {
        len : len,
        val : toString(packet.slice(4, packet_size + len)),
    };

    console.log("issend", issend);
    console.log("struct", struct);
    return struct;
}
