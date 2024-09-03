const ResourcesPage = {
    template: `
        <div>
            <h2 class="text-3xl font-bold mb-6">Resources</h2>
            <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4">Educational Materials</h3>
                <ul class="list-none space-y-4">
                    <li><a href="#" @click="showBeginnerGuide = true" class="text-blue-600 hover:underline">Beginner's Guide to Crypto Investing</a></li>
                    <li>
                        <a href="Resources/Education/What_is_Cryptocurrency.html" class="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-700">
                            View All Educational Resources
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4">Documentation</h3>
                <ul class="list-disc list-inside">
                    <li>
                        Terms of Service: 
                        <a href="Resources/Terms of Service.html" target="_blank" class="text-blue-600 hover:underline">View Online</a> | 
                        <a href="Resources/Terms_of_Service.pdf" target="_blank" class="text-blue-600 hover:underline">Download PDF</a>
                    </li>
                    <li>
                        EULA: 
                        <a href="Resources/EULA.html" target="_blank" class="text-blue-600 hover:underline">View Online</a> | 
                        <a href="Resources/EULA.pdf" target="_blank" class="text-blue-600 hover:underline">Download PDF</a>
                    </li>
                    <li>
                        Privacy Policy: 
                        <a href="Resources/Privacy Policy.html" target="_blank" class="text-blue-600 hover:underline">View Online</a> | 
                        <a href="Resources/Privacy_Policy.pdf" target="_blank" class="text-blue-600 hover:underline">Download PDF</a>
                    </li>
                    <li>
                        Refund Policy: 
                        <a href="Resources/Refund Policy.html" target="_blank" class="text-blue-600 hover:underline">View Online</a> | 
                        <a href="Resources/Refund_Policy.pdf" target="_blank" class="text-blue-600 hover:underline">Download PDF</a>
                    </li>
                </ul>
            </div>
            <!-- ... rest of the component ... -->
        </div>
    `,
    // ... rest of the component code ...
};