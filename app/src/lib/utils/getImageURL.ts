export const getImageURL = (collectionId: number, recordId: number, fileName: string, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};