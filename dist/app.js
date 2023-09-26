'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const mongoose_1 = __importDefault(require('mongoose'));
const transactionRoutes_1 = __importDefault(
	require('./routes/transactionRoutes')
);
const dbURI =
	'mongodb+srv://yashmundankar:yash123@nodepractice.k6owukd.mongodb.net/?retryWrites=true&w=majority';
const app = (0, express_1.default)();
mongoose_1.default
	.connect(dbURI)
	.then((result) => app.listen(3000, () => console.log('Server Running')))
	.catch((err) => console.log(err));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
	res.sendFile('./views/Home.html', { root: __dirname });
});
app.use('/transactions', transactionRoutes_1.default);
