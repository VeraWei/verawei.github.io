import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        users: [{
            // administrator
            id: 0,
            roleId: 0,
            username: 'admin',
            password: 'admin123',
        }, {
            // sales
            id: 1,
            roleId: 1,
            username: 'Qiuming',
            password: 'admin123',
        }, {
            // 
            id: 2,
            roleId: 2,
            username: 'Qiuming',
            password: 'admin123',
        }]
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/company').default);
app.model(require('./models/customer').default);
app.model(require('./models/product').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
