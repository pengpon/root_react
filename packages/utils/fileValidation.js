export const validateFiles = (files, maxMB, Toast) => {
  const MAX_FILE_SIZE = maxMB * 1024 * 1024;

  const oversizedFiles = files.filter((file) => file.size > MAX_FILE_SIZE);
  const validFiles = files.filter((file) => file.size <= MAX_FILE_SIZE);

  if (oversizedFiles.length > 0) {
    const fileNames = oversizedFiles.map((file) => file.name).join(', ');
    Toast.fire({
      position: 'top',
      icon: 'warning',
      title: 'File too large',
      text: `${fileNames} exceeds ${maxMB} MB.`,
      color: '#1f2937',
      iconColor: '#f59e0b',
      background: '#ffffff',
    });
  }

  return validFiles;
};
