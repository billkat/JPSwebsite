import React from 'react';

const machineryData = [
    { machine: 'VMC 1', make: 'HAAS', capacity: '3 AXIS', quantity: 9, price: '----' },
    { machine: 'VMC 2', make: 'HAAS', capacity: '4 AXIS', quantity: 2, price: 'Content 2' },
    { machine: 'VMC 3', make: 'HAAS', capacity: '5 AXIS', quantity: 1, price: 'Content 3' },
    { machine: 'CNC TUNING', make: 'LMW', capacity: 'DIA 150 & 230MM', quantity: 3, price: 'Content 4' },
    { machine: 'MILLING WITH DRO', make: 'PRECICUT, TAIWAN', capacity: '950 X 750', quantity: 6, price: 'Content 5' },
    { machine: 'LATHE', make: 'JYOTI', capacity: '500MM & 1200MM', quantity: 6, price: 'Content 6' },
    { machine: 'WELDING RECTIFIER', make: 'ESAB', capacity: '400', quantity: 3, price: 'Content 7' },
    { machine: 'WELDING RECTIFIER', make: 'ESAB', capacity: '600', quantity: 3, price: 'Content 8' },
    { machine: 'MIG MACHINE', make: 'ADORE', capacity: '400 AMP', quantity: 2, price: 'Content 9' },
    { machine: 'GRINDER', make: 'DEWALT', capacity: '8,6,4 INCH', quantity: 8, price: 'Content 10' },
    { machine: 'SUBMERGE ARC', make: 'ADORE', capacity: '400 AMP', quantity: 1, price: 'Content 10' },
    { machine: 'ROLLING MACHINE', make: 'LOCAL', capacity: 'UPTO 25MM', quantity: 1, price: 'Content 10' },
    { machine: 'PIPE CUTTING MACHINE', make: 'DEWALT', capacity: '8 INCH DIA', quantity: 2, price: 'Content 10' },
    { machine: 'SURFACE GRINDER', make: 'RAMANNA', capacity: '400MM', quantity: 2, price: 'Content 10' },
    { machine: 'SLOTTER', make: 'JYOTI', capacity: '50MM', quantity: 1, price: 'Content 10' },
    { machine: 'HEATING FURNACE', make: 'SHAKTI', capacity: 'L-1 MTR', quantity: 2, price: 'Content 10' },
    { machine: 'DIGITAL PROFILE PROJECTOR', make: 'MITUTOYO', capacity: '400MM', quantity: 1, price: 'Content 10' },
    { machine: 'SLIDING HEAD', make: 'TSUGAMI', capacity: 'DIA 20MM', quantity: 2, price: 'Content 10' },
    { machine: 'LASER MAKING MACHINE', make: 'IMPORTED', capacity: '', quantity: 1, price: 'Content 10' },
    { machine: 'AIR COMPRESSOR', make: 'ELGI', capacity: '500LTR & 250LTR', quantity: 2, price: 'Content 10' },
    { machine: 'DISEL GENERATOR', make: '125KVA', capacity: '162KVA', quantity: 2, price: 'Content 10' },
    { machine: 'SURFACE TABLE', make: '1 MTR X 1MITR', capacity: '40KVA 1MITR', quantity: 2, price: 'Content 10' },
];

function MachineryList() {
    return (
        <div className="w-5/6 MachineryList mb-5 mx-auto max-md:w-full">
            <h2 className="text-center text-blue-700 text-5xl max-sm:text-3xl font-bold my-20">Plant & Machinery List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className=" text-white bg-[#214fc6]">
                            <th className="py-2 text-start px-4 font-bold border-b border-r border-gray-300">Machine</th>
                            <th className="py-2 text-start px-4 font-bold border-b border-r border-gray-300">Make</th>
                            <th className="py-2 text-start px-4 font-bold border-b border-r border-gray-300">Capacity</th>
                            <th className="py-2 text-start px-4 font-bold border-b border-r border-gray-300">Quantity</th>
                            {/* <th className="py-2 text-start px-4 font-bold border-b border-r border-gray-300">Price</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {machineryData.map((item, index) => (
                            <tr key={index} className="even:bg-gray-100">
                                <td className="py-2 px-4 border-b border-r border-gray-300">{item.machine}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-300">{item.make}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-300">{item.capacity}</td>
                                <td className="py-2 px-4 border-b border-r border-gray-300">{item.quantity}</td>
                                {/* <td className="py-2 px-4 border-b border-r border-gray-300">{item.price}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MachineryList;
