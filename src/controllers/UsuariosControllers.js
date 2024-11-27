class UsuariosControllers {
        constructor() {
            Object.preventExtensions(this);
        }
    
        // Obtener todos los usuarios
        fetchUsers = async (req, resp) => {
            const data = "📋 ¡Usuarios encontrados! Aquí tienes la lista completa de usuarios registrados.";
            resp.status(200).json({ message: data });
        }
    
        // Crear un nuevo usuario
        createUsers = async (req, resp) => {
            const data = "✅ ¡Genial! El usuario ha sido creado exitosamente. 🎉";
            resp.status(200).json({ message: data });
        }
    
        // Actualizar un usuario
        updateUsers = async (req, resp) => {
            const data = "🔄 ¡Hecho! La información del usuario ha sido actualizada correctamente.";
            resp.status(200).json({ message: data });
        }
    
        // Eliminar un usuario
        deleteUsers = async (req, resp) => {
            const data = "🗑️ ¡Usuario eliminado exitosamente! Si necesitas recuperarlo, puedes registrarlo de nuevo.";
            resp.status(200).json({ message: data });
        }
    }
    
    module.exports = UsuariosControllers;
    