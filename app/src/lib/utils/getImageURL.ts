export const getImageURL = (collectionId: string, recordId: string, fileName: string, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};