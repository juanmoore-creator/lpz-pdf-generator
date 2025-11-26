import { v4 as uuidv4 } from 'uuid';

// We'll use a simple ID generator if uuid isn't available, or just Date.now()
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const createNewProperty = () => ({
    id: generateId(),
    address: '',
    price: 0,
    pricePerM2: 0,
    surfaceTotal: 0,
    surfaceCovered: 0,
    surfaceSemiCovered: 0,
    environments: 0,
    bedrooms: 0,
    bathrooms: 0,
    toilettes: 0,
    garage: false,
    antiquity: 0,
    floors: 0,
    apartmentsInBuilding: 0,
    status: 'Activa',
    daysOnMarket: 0,
    expenses: 0,
    description: '',
    services: [],
    operationType: 'Venta',
    propertyType: 'Departamento',
    suitableCredit: false,
    offersFinancing: false,
    suitableProfessional: false,
    images: [], // Array of Base64 strings
});

export const initialReportData = {
    suggestedPublicationPrice: 0,
    suggestedSalePrice: 0,
    clientName: '',
    propertyAddress: '',
    brokerName: 'Gabriel Lopez',
    brokerLicense: 'CMCPDJLP 7463',
};
