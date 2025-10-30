export default function ResumeEmbed() {
  // Replace `resumeUrl` with a hosted PDF link if available
  const resumeUrl = '/resume.pdf';

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <iframe
          title="Résumé"
          src={resumeUrl}
          className="w-full h-full"
        />
      </div>
      <div className="p-3 text-sm">
        If the résumé does not display, you can
        {' '}<a className="text-blue-600 dark:text-blue-400 underline" href={resumeUrl} target="_blank" rel="noreferrer">open it here</a>.
      </div>
    </div>
  );
}

